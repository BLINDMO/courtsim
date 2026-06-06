// Builders for the system / user prompts sent to Claude during a trial.

function chargesSummary(c) {
  return c.charges.map((ch) => `Count ${ch.count}: ${ch.charge} (${ch.penal})`).join('; ');
}

function evidenceSummary(c, admittedIds) {
  const all = [...c.evidence.prosecution, ...c.evidence.defense];
  const list = admittedIds ? all.filter((e) => admittedIds.includes(e.id)) : all;
  return list.map((e) => `${e.label}: ${e.description}`).join(' | ');
}

function sideTheory(c, side) {
  return side === 'prosecution' ? c.prosecutionTheory : c.defenseTheory;
}

function sideName(side) {
  return side === 'prosecution' ? 'prosecution' : 'defense';
}

function opposingSide(side) {
  return side === 'prosecution' ? 'defense' : 'prosecution';
}

function counselName(c, side) {
  return c.opposingCounsel[side];
}

/* ---------- JUDGE: pretrial motion rulings ---------- */
export function judgeSystem(c) {
  return `You are the Honorable ${c.judge}, presiding over ${c.title} in ${c.jurisdiction}.
You are an experienced, no-nonsense criminal court judge. You have seen every argument.
You rule strictly on legal merit. Be terse and authoritative.
Case charges: ${chargesSummary(c)}
Available evidence: ${evidenceSummary(c)}`;
}

export function judgeUser(c, side, motions) {
  // motions: [{ title, basis, argument }]
  let body = `Rule on the following pretrial motions filed by the ${sideName(side)}:\n\n`;
  motions.forEach((m, i) => {
    body += `MOTION ${i + 1}: ${m.title}\nLEGAL BASIS: ${m.basis}\nARGUMENT SUBMITTED: ${m.argument}\n\n`;
  });
  body += `For each motion, respond in this exact format:
MOTION 1: [GRANTED / DENIED]
RULING: [2-3 sentences of legal reasoning]
IMPACT: [1 sentence on what changes if granted]

Continue numbering for every motion. Base your ruling on the legal quality and relevance of the argument submitted.`;
  return body;
}

/* ---------- OPPOSING COUNSEL: opening / closing ---------- */
export function counselSystem(c, userSide) {
  const opp = opposingSide(userSide);
  return `You are ${counselName(c, opp)}, the lead ${opp} attorney in ${c.title}.
Your theory: ${sideTheory(c, opp)}.
Key evidence supporting your position: ${evidenceSummary(c, c.evidence[opp].map((e) => e.id))}.
You are experienced, persuasive, and razor-focused on winning.`;
}

export function openingUser() {
  return `Deliver your opening statement to the jury. Address them directly. 200-300 words.
Be specific to the facts of this case. Reference your key evidence and witnesses.
Do not use generic language. Make it compelling.`;
}

export function closingUser() {
  return `Deliver your closing argument. Reference the specific evidence admitted, the witness testimony from this trial, and address the weakest points in the opposing counsel's case. 250-350 words. Be definitive. Tell the jury exactly what verdict to return and why.`;
}

/* ---------- WITNESS: examination answers ---------- */
export function witnessSystem(c, witness) {
  const facts = `${c.summary}`;
  return `You are ${witness.name}, ${witness.role}.
Your testimony in this case: ${witness.testimony}
Your vulnerabilities under cross-examination: ${witness.weaknesses}
Character notes: ${witness.aiPersona}
You have taken an oath. Answer only what is asked. Do not volunteer information.
Stay fully in character. If you don't know something, say so.
The facts of this case: ${facts}`;
}

export function witnessUser(question, mode) {
  return `The attorney's question to you on ${mode} examination is:
"${question}"

Respond as yourself, in character, in 2-4 sentences. Be realistic.`;
}

/* AI-generated opposing direct examination summary (non-interactive) */
export function opposingExamSystem(c, userSide) {
  const opp = opposingSide(userSide);
  return `You are ${counselName(c, opp)}, the lead ${opp} attorney in ${c.title}. You are conducting examination of a witness. Be concise and professional.`;
}

export function opposingExamUser(witness, examType) {
  return `Summarize the ${examType} examination of ${witness.name} (${witness.role}) in 3-4 short lines, written as a court-record excerpt with one or two key Q&A exchanges. The witness testifies about: ${witness.testimony}. Keep it under 90 words.`;
}

/* ---------- JUDGE: objection ruling ---------- */
export function objectionSystem(c) {
  return `You are the Honorable ${c.judge}, presiding over ${c.title}. You rule on objections instantly and decisively, in one sentence.`;
}

export function objectionUser(objectionType, lastQuestion, lastAnswer) {
  return `Counsel objects: ${objectionType}.
The question was: "${lastQuestion}"
The witness answered: "${lastAnswer || '(no answer yet)'}"
Rule on the objection in exactly one sentence, beginning with either "Sustained" or "Overruled".`;
}

/* ---------- JURY: final verdict ---------- */
export function jurySystem(c, userSide, admittedIds, suppressedIds) {
  const admitted = evidenceSummary(c, admittedIds);
  const all = [...c.evidence.prosecution, ...c.evidence.defense];
  const suppressed = all
    .filter((e) => suppressedIds.includes(e.id))
    .map((e) => `${e.label}: ${e.description}`)
    .join(' | ');
  return `You are the foreperson of the jury in ${c.title}, ${c.jurisdiction}.
You have just deliberated after hearing the complete trial.
You are analytical, fair, and you base your verdict ONLY on what was argued in court — not on what you know independently. If an argument was weak or vague, the jury noticed. If evidence was suppressed, it does not exist. If a witness was effectively impeached, weigh accordingly.

CASE BACKGROUND: ${c.summary} Charges: ${chargesSummary(c)}.
ADMITTED EVIDENCE: ${admitted || '(none)'}
SUPPRESSED EVIDENCE: ${suppressed || '(none)'}`;
}

export function juryUser(c, transcript, userSide) {
  const motions = (transcript.motionsFiled || [])
    .map((m) => `- ${m.motionTitle}: argued "${m.userArgument}" → ${m.outcome}`)
    .join('\n') || '(none filed)';

  const exams = (transcript.examinations || [])
    .map((ex) => {
      const direct = (ex.direct || []).map((qa) => `  Q: ${qa.q}\n  A: ${qa.a}`).join('\n');
      const cross = (ex.cross || []).map((qa) => `  Q: ${qa.q}\n  A: ${qa.a}`).join('\n');
      let s = `WITNESS: ${ex.witnessName} (${ex.side})`;
      if (direct) s += `\n DIRECT:\n${direct}`;
      if (cross) s += `\n CROSS:\n${cross}`;
      if (ex.opposingSummary) s += `\n OPPOSING EXAM: ${ex.opposingSummary}`;
      return s;
    })
    .join('\n\n') || '(no examination recorded)';

  const countsSchema = c.charges
    .map((ch) => `    { "count": ${ch.count}, "charge": "${ch.charge.replace(/"/g, "'")}", "verdict": "GUILTY" or "NOT GUILTY", "votes": "10-2" }`)
    .join(',\n');

  return `Analyze this complete trial transcript and render a verdict.

=== PRETRIAL MOTIONS ===
${motions}

=== OPENING STATEMENTS ===
PROSECUTION: ${transcript.openings.prosecution || '(not delivered)'}
DEFENSE: ${transcript.openings.defense || '(not delivered)'}

=== WITNESS EXAMINATION ===
${exams}

=== CLOSING ARGUMENTS ===
PROSECUTION: ${transcript.closings.prosecution || '(not delivered)'}
DEFENSE: ${transcript.closings.defense || '(not delivered)'}

=== THE USER WAS PLAYING AS: ${userSide} ===

Respond in this EXACT JSON format (no markdown, no preamble):
{
  "counts": [
${countsSchema}
  ],
  "forepersonStatement": "3-4 sentences explaining the verdict",
  "score": 78,
  "whatWorked": ["specific callout from the user's actual arguments", "another"],
  "whatHurt": ["specific weakness", "another"],
  "turningPoints": ["a moment that swung the jury", "optional second"]
}
The "score" is an integer 0-100 rating the quality of the user's (${userSide}) advocacy. Base whatWorked/whatHurt/turningPoints on what the user actually argued.`;
}

/* ---------- ruling parser ---------- */
export function parseJudgeRulings(text, motions) {
  // Returns array aligned to motions: { granted, ruling, impact }
  const results = motions.map(() => ({ granted: false, ruling: '', impact: '' }));
  if (!text || text === '__ERROR__') return null;
  // Split on "MOTION N:" markers.
  const blocks = text.split(/MOTION\s+\d+\s*:/i).slice(1);
  blocks.forEach((block, i) => {
    if (i >= results.length) return;
    const granted = /\bGRANTED\b/i.test(block) && !/\bDENIED\b/i.test(block.split('RULING')[0]);
    const rulingMatch = block.match(/RULING\s*:\s*([\s\S]*?)(?=IMPACT\s*:|$)/i);
    const impactMatch = block.match(/IMPACT\s*:\s*([\s\S]*?)$/i);
    results[i] = {
      granted: /\bGRANTED\b/i.test(block.split(/RULING/i)[0]),
      ruling: rulingMatch ? rulingMatch[1].trim() : block.trim(),
      impact: impactMatch ? impactMatch[1].trim() : '',
    };
  });
  return results;
}
