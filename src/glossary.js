// Plain-English explanations of legal concepts surfaced via ⓘ tooltips.
export const GLOSSARY = {
  'felony murder':
    'A rule that makes a person guilty of murder if a death occurs during the commission of a dangerous felony — even if they did not intend to kill anyone.',
  'reasonable doubt':
    'The high standard the prosecution must meet to convict. If a juror has a real, fact-based doubt about guilt, they must acquit.',
  'proximate cause':
    'A legal cause that is close enough in the chain of events to hold someone responsible for the result. "But-for" cause alone is not always enough.',
  hearsay:
    'An out-of-court statement offered to prove the truth of what it asserts. Generally inadmissible unless an exception applies.',
  'hearsay exception':
    'A recognized situation (dying declaration, present sense impression, business record, statement of state of mind, etc.) where an out-of-court statement may still be admitted.',
  miranda:
    'The warning police must give before custodial interrogation. Statements taken without it may be suppressed.',
  ngri:
    'Not Guilty by Reason of Insanity — a defense arguing the defendant could not understand the nature or wrongfulness of their act due to mental disease.',
  entrapment:
    'A defense available when law enforcement induces a person to commit a crime they were not predisposed to commit.',
  rico:
    'The Racketeer Influenced and Corrupt Organizations Act — targets a pattern of criminal activity conducted through an enterprise.',
  'battered woman syndrome':
    'Expert evidence about the psychological effects of prolonged domestic abuse, often offered to support a self-defense claim.',
  bruton:
    'A rule barring the use of a non-testifying co-defendant\'s confession against the defendant, protecting the right to confront witnesses.',
  'confrontation clause':
    'The Sixth Amendment right of a defendant to confront and cross-examine the witnesses against them.',
  'chain of custody':
    'The documented handling of evidence from collection to trial. Gaps can undermine reliability and admissibility.',
  'rape shield':
    'A rule limiting evidence of an accuser\'s prior sexual history to prevent unfair prejudice.',
  'franks hearing':
    'A hearing to challenge a search warrant by showing the supporting affidavit contained deliberate or reckless falsehoods.',
  'fre 403':
    'Federal Rule of Evidence 403 — relevant evidence may be excluded if its unfair prejudice substantially outweighs its probative value.',
  'fre 404(b)':
    'A rule barring use of prior bad acts to prove someone acted "in character," though such acts may be admitted for other purposes.',
  premeditation:
    'Planning or deliberation before a killing — a key element elevating a homicide to first-degree murder.',
  objection:
    'A formal challenge to testimony or evidence. If "sustained," the judge agrees and it is excluded; if "overruled," it stands.',
  'direct examination':
    'Questioning of a witness by the side that called them. Leading questions are generally not allowed.',
  'cross examination':
    'Questioning of a witness by the opposing side, designed to test or undermine their testimony. Leading questions are allowed.',
  'proximate causation':
    'See proximate cause — whether the defendant\'s act is legally close enough to the harm to assign responsibility.',
};

export function glossaryLookup(term) {
  if (!term) return null;
  return GLOSSARY[term.toLowerCase()] || null;
}
