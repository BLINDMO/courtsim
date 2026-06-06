export const CASES = [
  {
    id: 'case-001',
    title: 'People v. Tyler Jennings',
    crimeType: 'FELONY MURDER',
    complexity: 'low',
    favorability: 'prosecution',
    jurisdiction: 'Cook County, Illinois',
    year: 2024,
    judge: 'Hon. Marcia Delacroix',
    opposingCounsel: { prosecution: 'ADA Raymond Voss', defense: 'Public Defender Alicia Marsh' },
    summary: 'A 20-year-old carjacks a vehicle at gunpoint; the 67-year-old victim suffers a fatal cardiac arrest during the struggle. Jennings claims he never intended harm and did not know the victim had a heart condition.',
    backstory: `On the evening of March 14, 2024, Tyler Jennings, 20, approached Elena Caruso, 67, in the parking garage of the Northside Mall in Chicago. Armed with a .38 revolver, he demanded her keys. When Caruso resisted, Jennings grabbed her arm and shoved her against her own vehicle. Caruso collapsed. She was pronounced dead at Northwestern Memorial Hospital 40 minutes later. The cause of death was acute myocardial infarction precipitated by extreme physical and psychological stress.

Surveillance footage captured the entire incident. Jennings was apprehended two blocks away, still in possession of Caruso's 2022 Honda Accord and the revolver. He told arresting officers: "I just wanted the car. I didn't think anyone was going to die."

Tyler Jennings had no prior violent convictions. He had been laid off from a warehouse job three weeks earlier and claimed he acted out of desperation. His public defender argues the felony murder rule extends liability too far — that Jennings could not have foreseen a cardiac event.

The prosecution argues the law is clear: when a death occurs during the commission of a forcible felony, the perpetrator is criminally responsible regardless of intent or foreseeability. Elena Caruso's family is present for every court date.`,
    accused: { name: 'Tyler Jennings', age: 20, occupation: 'Unemployed (former warehouse worker)', background: 'High school graduate, no violent priors, one prior misdemeanor theft.', priorRecord: 'One prior misdemeanor theft conviction (2022).' },
    victim: { name: 'Elena Caruso', age: 67, occupation: 'Retired school librarian', relationship: 'Stranger' },
    charges: [
      { count: 1, charge: 'Felony Murder (First Degree)', penal: '720 ILCS 5/9-1(a)(3)', maxSentence: '20-60 years' },
      { count: 2, charge: 'Aggravated Vehicular Hijacking', penal: '720 ILCS 5/18-4', maxSentence: '6-30 years' },
      { count: 3, charge: 'Unlawful Use of a Weapon by a Felon', penal: '720 ILCS 5/24-1.1', maxSentence: '3-14 years' }
    ],
    prosecutionTheory: 'Jennings committed an armed carjacking — a forcible felony — during which Elena Caruso died. Illinois felony murder doctrine holds him fully responsible for her death regardless of intent. The act was violent, deliberate, and the death was a direct, proximate consequence.',
    defenseTheory: 'Tyler Jennings is not a murderer. He committed a theft. The tragic death of Elena Caruso resulted from a pre-existing heart condition that Jennings could not have known about and could not have foreseen. The felony murder doctrine should not be stretched to make a young man with no violent history responsible for a medical event.',
    prosecutionStrategies: ['Emphasize the violence of the act — victim was shoved, which caused the cardiac event', 'Use Illinois felony murder precedent to establish proximate cause', 'Show surveillance footage detail — Jennings was aggressive, not merely taking keys'],
    defenseStrategies: ['Challenge proximate causation — argue the "but for" test fails because the cardiac event was due to pre-existing condition', 'Humanize Jennings — no violent history, desperate circumstances', 'Call a cardiologist to testify that any minor stress could have triggered the event, severing the causal chain'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Parking garage surveillance footage (HD) showing Jennings approaching, displaying weapon, struggling with victim, and victim collapsing.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Autopsy report: cause of death — acute myocardial infarction. Medical examiner notes "extreme emotional and physical stress as precipitating event."', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Recovered .38 caliber revolver with defendant\'s fingerprints. Two rounds had been previously fired (unrelated to this incident).', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Defendant\'s recorded statement to arresting officers: "I just wanted the car. I didn\'t think anyone was going to die."', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Victim\'s medical records showing she had a documented but managed coronary artery disease — however, her cardiologist testified she was "living a full, active life" prior to the incident.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Expert report from Dr. Alan Whitfield, cardiologist: any emotional stressor — a loud argument, a near-miss car accident — could have triggered victim\'s event. The carjacking was not uniquely causative.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Defendant\'s employment records showing he was laid off 21 days before the incident with no severance.', strength: 'weak' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Psychiatric evaluation: Jennings shows no antisocial traits, no pattern of violence. Impulse control deficits consistent with economic desperation, not predatory behavior.', strength: 'weak' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Testimony of neighbor Paulette Jones: "Tyler was a good kid. He helped me carry groceries. This doesn\'t make sense."', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. Constance Farrow', role: 'Cook County Medical Examiner', testimony: 'Performed the autopsy. Will testify that the physical struggle was the precipitating cause of the cardiac event, and that without the assault, Caruso would not have died that night.', weaknesses: 'Can be pressed on whether other stressors could have caused the same outcome.', aiPersona: 'You are Dr. Constance Farrow, the Cook County Medical Examiner. You are precise, factual, and unflappable. You performed Elena Caruso\'s autopsy. Your finding: the physical altercation directly precipitated her fatal cardiac event. She had a manageable heart condition prior to this night.' },
        { id: 'PW2', name: 'Officer Denise Park', role: 'Arresting Officer, CPD', testimony: 'Arrested Jennings two blocks from the scene. Will testify to defendant\'s demeanor, the incriminating statement, and the recovered weapon and vehicle.', weaknesses: 'Body cam footage shows Jennings was cooperative upon arrest — defense may argue he panicked, not fled.', aiPersona: 'You are Officer Denise Park, Chicago PD. You arrested Tyler Jennings approximately 8 minutes after the carjacking. He was in the victim\'s car. He said "I just wanted the car. I didn\'t think anyone was going to die." He surrendered willingly when you approached.' },
        { id: 'PW3', name: 'Michael Caruso', role: 'Victim\'s Son', testimony: 'Testifies to impact on family, and will establish that victim was in good health and active prior to the incident — countering any argument she was "about to die anyway."', weaknesses: 'Emotional testimony — defense may object to relevance.', aiPersona: 'You are Michael Caruso, Elena\'s son. You are grieving. Your mother was healthy, active, and full of life. She volunteered at the library three days a week. She was not "about to die." Tyler Jennings killed her.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Alan Whitfield', role: 'Cardiologist, Northwestern University', testimony: 'Expert witness. Will testify that given the victim\'s cardiac condition, any number of daily stressors — not just a violent confrontation — could have triggered the event. The causal link between Jennings\'s act and her death is not exclusive.', weaknesses: 'Prosecution will establish that THIS stressor, at THIS moment, was the actual cause. The "could have happened anyway" argument is legally insufficient for proximate cause.', aiPersona: 'You are Dr. Alan Whitfield, a cardiologist. You are here as an expert witness for the defense. You reviewed the autopsy and Caruso\'s medical history. A person with her condition could have experienced a fatal cardiac event due to many triggers. You cannot say with medical certainty that the carjacking — as opposed to, say, a frightening fall or a car accident — was uniquely causative.' },
        { id: 'DW2', name: 'Tyler Jennings', role: 'Defendant (if called)', testimony: 'If called: will testify he never intended harm, panicked due to financial desperation, did not point the gun directly at the victim, and was horrified when she collapsed.', weaknesses: 'Any minor inconsistency in his statement will be exploited. His prior theft conviction can come in if he takes the stand.', aiPersona: 'You are Tyler Jennings, the defendant. You are scared but truthful. You did take the car. You showed the gun but you never meant to hurt anyone — you pointed it down, not at her. When she grabbed your arm and you pushed her away, you didn\'t think she would fall. When she collapsed you froze. You are not a violent person. You made a terrible mistake.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude Defendant\'s Statement to Police', basis: 'Fifth Amendment — Miranda violation. Jennings was questioned before receiving Miranda warnings.', likelyOutcome: 'contested', argument: 'Officer Park questioned Jennings about the incident before reading him his Miranda rights. "I just wanted the car" is a statement made during custodial interrogation without proper advisement.' },
        { id: 'M2', title: 'Motion to Sever Count 3 (Weapons Charge)', basis: 'Prejudicial joinder — prior fired rounds make defendant appear dangerous beyond the facts of this case.', likelyOutcome: 'denied', argument: 'The prior-fired rounds on the revolver have no connection to this case and will unfairly prejudice the jury into believing the defendant is a habitual firearms offender.' },
        { id: 'M3', title: 'Motion to Exclude Victim\'s Medical Records', basis: 'Relevance — victim\'s pre-existing condition is irrelevant if the jury accepts proximate causation.', likelyOutcome: 'denied', argument: 'The prosecution seeks to introduce victim\'s cardiac records. These records, if admitted, require the defense to explain them to the jury, which is prejudicial.' }
      ]
    }
  },
  {
    id: 'case-002',
    title: 'People v. Marcus Delgado',
    crimeType: 'FIRST-DEGREE MURDER',
    complexity: 'medium',
    favorability: 'prosecution',
    jurisdiction: 'Los Angeles County Superior Court, California',
    year: 2024,
    judge: 'Hon. Patricia Holloway',
    opposingCounsel: { prosecution: 'Deputy DA Sandra Chen', defense: 'Attorney Dominic Ferrara' },
    summary: 'An insurance agent is accused of poisoning his wife with antifreeze over several weeks to collect a secret $2 million life insurance policy. The defense contends the wife was suicidal and ingested the ethylene glycol herself.',
    backstory: `Elena Delgado, a 39-year-old pediatric nurse, died on June 2, 2024, after a baffling six-week decline marked by nausea, confusion, slurred speech, and ultimately kidney failure. Doctors initially suspected a neurological disorder. It was only after her death that toxicology revealed a massive concentration of ethylene glycol — automotive antifreeze — in her blood, consistent with repeated, escalating doses rather than a single fatal event.

Investigators discovered that her husband, Marcus Delgado, 42, a senior insurance agent, had quietly purchased a $2 million life insurance policy on Elena eleven months earlier, routing all correspondence to a private P.O. box. The application bore what a document examiner concluded was a forged version of Elena's signature. Detectives also found an AutoZone receipt for antifreeze in the household trash — a product incompatible with Marcus's own vehicle.

Marcus is described by colleagues as charming, polished, and meticulous. By acquaintances he is described as calculating. The prosecution paints a portrait of a man drowning in $78,000 of secret debt who engineered his wife's death for a payout. Marcus's browser history, recovered from his laptop, included searches such as "is antifreeze tasteless in food" and "how long does ethylene glycol stay in the body."

The defense counters that Elena had been quietly battling depression, had confided hopelessness to her therapist, and that ethylene glycol is freely available in any garage. Marcus, they argue, is a grieving widower being railroaded by circumstantial evidence and a prosecution eager for a villain.`,
    accused: { name: 'Marcus Delgado', age: 42, occupation: 'Senior Insurance Agent', background: 'College-educated, no prior record, financially strained with $78,000 in secret debt. Described as charming but calculating.', priorRecord: 'No prior criminal record.' },
    victim: { name: 'Elena Delgado', age: 39, occupation: 'Pediatric nurse', relationship: 'Spouse (married 8 years)' },
    charges: [
      { count: 1, charge: 'First-Degree Premeditated Murder', penal: 'Cal. Penal Code § 187(a)', maxSentence: 'Life without parole' },
      { count: 2, charge: 'Special Circumstance Murder for Financial Gain', penal: 'Cal. Penal Code § 190.2(a)(1)', maxSentence: 'Death or life without parole' }
    ],
    prosecutionTheory: 'Marcus Delgado methodically poisoned his wife with antifreeze over six weeks to collect a secret $2 million life insurance policy he obtained by forging her signature. His browser searches reveal premeditation and knowledge of the poison. His crushing secret debt supplied the motive, and the dosing pattern proves deliberation.',
    defenseTheory: 'Marcus Delgado is a grieving husband, not a murderer. Elena suffered from undiagnosed depression and expressed hopelessness to her own therapist. The prosecution\'s case is entirely circumstantial — antifreeze is available in every garage, and Marcus\'s job as a fraud investigator explains his familiarity with poisoning cases. There is no eyewitness and no confession.',
    prosecutionStrategies: ['Establish the secret policy and forged signature to prove financial motive', 'Use the dosing-pattern toxicology to prove premeditation over weeks', 'Introduce browser history to show knowledge and planning', 'Present friend testimony about Marcus serving Elena "special drinks"'],
    defenseStrategies: ['Reframe browser searches as job-related fraud-case research', 'Introduce Elena\'s mental-health records to support a suicide theory', 'Attack the chain of inference — no direct evidence Marcus administered the poison', 'Argue the forged-signature finding is an opinion, not a certainty'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'A secret $2 million life insurance policy on Elena, routed to a private P.O. box, bearing a signature a document examiner concluded was forged.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Toxicology report showing 380 mg/dL ethylene glycol, with metabolite ratios consistent with repeated dosing over weeks rather than a single ingestion.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'AutoZone receipt for a gallon of antifreeze found in the household trash, a coolant type incompatible with Marcus\'s own truck.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Browser history from Marcus\'s laptop including "is antifreeze tasteless in food" and "how long does ethylene glycol stay in the body."', strength: 'strong' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Testimony of Gina Torres that Marcus insisted on making Elena "special drinks" each evening during the weeks she fell ill.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Therapist session notes documenting Elena\'s low mood, expressions of hopelessness, and a comment that her family "would be better off."', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Expert report on the ubiquity and easy accessibility of ethylene glycol, asserting the receipt proves nothing about who administered it.', strength: 'weak' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Marcus\'s professional case files showing he reviewed multiple poisoning-related insurance fraud claims, offering an innocent explanation for his searches.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. James Kowalski', role: 'LAPD Forensic Toxicologist', testimony: 'Will testify that the metabolite profile is inconsistent with a single suicidal dose and instead reflects escalating administration over six weeks.', weaknesses: 'Cannot identify who administered the poison; must concede self-administration is theoretically possible.', aiPersona: 'You are Dr. James Kowalski, an LAPD forensic toxicologist. You are meticulous and confident in the science. The metabolite ratios indicate repeated, escalating doses of ethylene glycol over weeks, not one large dose. You will admit, if pressed, that toxicology alone cannot say whose hand poured it, but you find the dosing pattern far more consistent with surreptitious poisoning than suicide.' },
        { id: 'PW2', name: 'Gina Torres', role: 'Elena\'s Best Friend', testimony: 'Will testify Elena was happy, planning a vacation, and that Marcus insisted on personally making Elena "special drinks" every night during her illness.', weaknesses: 'Did not witness any poisoning; defense will note she disliked Marcus and may be biased.', aiPersona: 'You are Gina Torres, Elena\'s best friend of fifteen years. You loved Elena and never trusted Marcus. Elena was excited about a trip to Portugal — she was not suicidal. You noticed Marcus always made her these special drinks and waved you off when you offered to help. You will not exaggerate, but you will firmly reject any suggestion Elena wanted to die.' },
        { id: 'PW3', name: 'Agent Patricia Liu', role: 'California Dept. of Insurance Fraud Investigator', testimony: 'Will testify to the secret policy, the P.O. box concealment, the forged signature finding, and Marcus\'s $78,000 in undisclosed debt.', weaknesses: 'The forgery finding is an expert opinion; the debt is circumstantial as to motive.', aiPersona: 'You are Agent Patricia Liu of the California Department of Insurance. You uncovered the hidden $2 million policy routed to a P.O. box and the $78,000 in concealed debt. A document examiner concluded the signature was forged. You are factual and careful; you will concede the forgery is an expert opinion, not a fingerprint, but the concealment pattern is striking.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Sarah Bloom', role: 'Forensic Psychiatrist', testimony: 'Will testify Elena exhibited signs of clinical depression and that her therapist notes are consistent with suicidal ideation.', weaknesses: 'Never treated or met Elena; opinion is a posthumous record review. Repeated self-poisoning over weeks is an atypical suicide method.', aiPersona: 'You are Dr. Sarah Bloom, a forensic psychiatrist retained by the defense. You reviewed Elena\'s therapy records and see indicators of depression and hopelessness. You will testify suicide cannot be ruled out. You must concede you never met Elena and that slow self-poisoning over six weeks would be a highly unusual suicide method.' },
        { id: 'DW2', name: 'Marcus Delgado', role: 'Defendant (if called)', testimony: 'If called: will testify the policy was a legitimate plan, the searches were job-related, and that Elena was depressed and he is being framed by circumstance.', weaknesses: 'The forged signature and special-drinks testimony are devastating; his polished demeanor may read as cold.', aiPersona: 'You are Marcus Delgado, the defendant. You are composed, articulate, and insistent on your innocence. You bought the policy as responsible planning. Your antifreeze searches were for work fraud cases. You deny forging anything and suggest Elena signed without reading. You loved Elena and are devastated. Do not confess. Stay calm even when pressed, but avoid sounding rehearsed or callous.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress Browser History', basis: 'Fourth Amendment — the search warrant for the laptop was limited to financial records and did not authorize a full browsing-history extraction.', likelyOutcome: 'denied', argument: 'The warrant authorized seizure of financial documents only. The forensic team exceeded its scope by extracting the entire browsing history, rendering the antifreeze searches fruit of an unlawful search.' },
        { id: 'M2', title: 'Motion to Exclude the Insurance Policy', basis: 'California Evidence Code § 352 — probative value is substantially outweighed by prejudice.', likelyOutcome: 'denied', argument: 'The secret policy invites the jury to assume guilt from greed alone. Its prejudicial portrayal of the defendant as mercenary outweighs any legitimate probative value on the question of who administered poison.' },
        { id: 'M3', title: 'Motion to Exclude Torres\'s "Special Drinks" Testimony', basis: 'Hearsay and speculation — the testimony invites the jury to infer poisoning from an innocent act.', likelyOutcome: 'contested', argument: 'Torres never saw any poison added to any drink. Her testimony that Marcus made "special drinks" asks the jury to speculate that an ordinary husband\'s gesture was murder, which is unfairly prejudicial and lacks foundation.' }
      ]
    }
  },
  {
    id: 'case-003',
    title: 'United States v. Viktor Sokolov',
    crimeType: 'COMPUTER FRAUD / RECKLESS MURDER',
    complexity: 'high',
    favorability: 'balanced',
    jurisdiction: 'U.S. District Court, S.D.N.Y.',
    year: 2025,
    judge: 'Hon. David Farber (SDNY)',
    opposingCounsel: { prosecution: 'AUSA Katherine Drummond', defense: 'Attorney James Whitmore' },
    summary: 'A Russian national is charged with deploying the "Phoenix" ransomware that crippled 47 U.S. hospitals, leading to three patient deaths during ICU outages. The defense argues misattribution — that the code was stolen and weaponized by a Russian state-sponsored group while Sokolov was abroad.',
    backstory: `In the early hours of January 9, 2025, the "Phoenix" ransomware detonated simultaneously across 47 hospitals in the eastern United States, encrypting electronic health records, locking infusion pumps, and disabling ICU monitoring systems. For nearly fourteen hours, clinicians worked by flashlight and paper charts. Three patients died during the outage, including a premature infant whose ventilator monitoring failed and an elderly cardiac patient whose telemetry alarms never sounded.

The attackers demanded $2.3 million in Bitcoin per facility. FBI Cyber Division traced a consolidation wallet that received $2.3 million and matched the ransomware's source code — 847 lines — against a sample Viktor Sokolov, a 34-year-old cybersecurity researcher, had uploaded to a public repository in 2019. The code shared a distinctive obfuscation routine Sokolov had even described in a conference talk.

Sokolov was arrested while transiting through John F. Kennedy Airport. He insists he was in Lisbon at a security conference when the attack launched, with badge-scan records to prove it, and that his published code was freely available and reused by the Russian state-linked "Sandstorm" group, which routinely repurposes public exploits to create plausible deniability.

The case is a landmark test of whether a hacker can be charged with murder for deaths caused by a cyberattack. The defense also challenges whether a U.S. court even has jurisdiction over a Russian national whose alleged conduct occurred entirely overseas. The prosecution must convince a jury that code is a signature — and that Sokolov pulled the trigger.`,
    accused: { name: 'Viktor Sokolov', age: 34, occupation: 'Cybersecurity researcher / freelance developer', background: 'Russian national, internationally recognized security researcher. Subject of a 2019 FBI indictment that was dismissed on jurisdictional grounds.', priorRecord: 'Prior 2019 FBI indictment dismissed for lack of jurisdiction; no convictions.' },
    victim: { name: 'Multiple deceased patients (incl. a premature infant)', age: 'Various (infant to 81)', occupation: 'Hospital patients across 47 facilities', relationship: 'Strangers' },
    charges: [
      { count: 1, charge: 'Conspiracy to Commit Computer Fraud', penal: '18 U.S.C. § 1030(b)', maxSentence: '20 years' },
      { count: 2, charge: 'Intentional Damage to a Protected Computer Causing Death', penal: '18 U.S.C. § 1030(a)(5)(A)', maxSentence: 'Life imprisonment' },
      { count: 3, charge: 'Extortion via Electronic Communications', penal: '18 U.S.C. § 875', maxSentence: '20 years' },
      { count: 4, charge: 'Wire Fraud', penal: '18 U.S.C. § 1343', maxSentence: '20 years' }
    ],
    prosecutionTheory: 'Viktor Sokolov authored and deployed the Phoenix ransomware, knowing it would cripple hospital systems, and three patients died as a direct result. The source code carries his unique signature, and a $2.3 million Bitcoin trail leads to his network. His overseas location is irrelevant; the harm landed on American soil and American patients.',
    defenseTheory: 'Viktor Sokolov is a scapegoat for an attack he did not commit. His publicly released research code was stolen and weaponized by the state-linked Sandstorm group, which deliberately reuses published code to frame independent researchers. Sokolov was in Lisbon during the attack, and the U.S. lacks jurisdiction over a Russian national acting entirely abroad.',
    prosecutionStrategies: ['Present the code-signature match and obfuscation routine as a digital fingerprint', 'Trace the $2.3 million Bitcoin consolidation wallet to Sokolov\'s infrastructure', 'Use ICU mortality analysis to prove the deaths were caused by the outage', 'Establish jurisdiction via the effects doctrine — harm to U.S. hospitals'],
    defenseStrategies: ['Use the CrowdStrike report to show code similarity is not proof of authorship', 'Prove the Lisbon alibi with conference badge-scan records', 'Argue Sandstorm reuses public code to create deniability', 'Challenge personal jurisdiction over a foreign national acting overseas'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Blockchain analysis tracing a $2.3 million Bitcoin consolidation wallet through mixers to infrastructure linked to Sokolov.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Source code comparison: 847 lines of the Phoenix ransomware match Sokolov\'s 2019 public sample, including a patented obfuscation routine he described in a conference talk.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'VPN connection logs from a Dutch provider linking a control node to an account associated with Sokolov around the attack window.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'ICU mortality analysis by Dr. Grace Okafor concluding all three deaths were directly attributable to the monitoring and infusion outage.', strength: 'strong' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'CrowdStrike threat report concluding the code similarity is "consistent with but not proof of" Sokolov\'s authorship, and that the Sandstorm group routinely reuses published code.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Travel and conference badge-scan records placing Sokolov at a Lisbon security conference during the attack window.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Hospital network IT audit showing administrators ignored 14 prior security upgrade recommendations, leaving systems vulnerable.', strength: 'moderate' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'SA Mark Ryden', role: 'FBI Cyber Division Special Agent', testimony: 'Will testify to the Bitcoin trace, the code-signature match, and the VPN logs tying the attack infrastructure to Sokolov.', weaknesses: 'Bitcoin tracing involves probabilistic inference through mixers; the VPN account attribution is not airtight.', aiPersona: 'You are Special Agent Mark Ryden of the FBI Cyber Division. You led the technical investigation. The Bitcoin trail, the 847-line code match, and the VPN logs all point to Sokolov. You are confident but technically precise; you will acknowledge that blockchain mixers introduce some probabilistic uncertainty, while maintaining that the totality of evidence overwhelmingly implicates the defendant.' },
        { id: 'PW2', name: 'Dr. Grace Okafor', role: 'ICU Physician, Johns Hopkins', testimony: 'Will testify that the three deaths were directly caused by the loss of monitoring and infusion systems during the outage.', weaknesses: 'Two of the patients were critically ill; defense will argue they might have died regardless of the outage.', aiPersona: 'You are Dr. Grace Okafor, an ICU physician at Johns Hopkins who conducted the mortality analysis. You will testify that the outage caused these deaths — alarms did not sound, pumps failed, monitoring went dark. You are compassionate but rigorous. You will concede the patients were critically ill, but you firmly maintain that proper monitoring would more likely than not have saved them.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Tobias Henriksen', role: 'Attribution Expert, MIT Lincoln Laboratory', testimony: 'Will testify that code reuse is rampant, that the Sandstorm group repurposes public code, and that authorship cannot be proven from similarity alone.', weaknesses: 'Cannot affirmatively prove Sandstorm did it; concedes the obfuscation routine is distinctive to Sokolov.', aiPersona: 'You are Dr. Tobias Henriksen, a cyberattack attribution expert from MIT Lincoln Laboratory testifying for the defense. You will explain that published exploit code is freely copied, and that state actors like Sandstorm deliberately reuse it to frame others. You are academic and careful. You must concede that the obfuscation routine is distinctive, but you insist similarity is not authorship and attribution requires far more than matching code.' },
        { id: 'DW2', name: 'Viktor Sokolov', role: 'Defendant (if called)', testimony: 'If called: will testify he was in Lisbon, that his research code was public, and that he never authored or deployed the Phoenix attack.', weaknesses: 'His 2019 indictment and adversarial reputation can color the jury; he must explain why his unique code was used.', aiPersona: 'You are Viktor Sokolov, the defendant, a respected security researcher. You are intelligent, somewhat impatient with non-technical questions, and adamant you are innocent. You were in Lisbon. You published your code openly years ago for the security community; you cannot control who copies it. You believe Sandstorm framed you. Do not confess. Stay technical and composed, but be careful not to come across as arrogant or dismissive of the deaths.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Dismiss for Lack of Personal Jurisdiction', basis: 'Due Process — the defendant is a foreign national whose alleged conduct occurred entirely outside the United States.', likelyOutcome: 'denied', argument: 'Sokolov is a Russian national who never set foot in the United States during the relevant conduct. Exercising jurisdiction over wholly extraterritorial acts violates due process absent sufficient minimum contacts with this forum.' },
        { id: 'M2', title: 'Motion to Suppress VPN Logs', basis: 'Obtained through an MLAT request that allegedly exceeded its authorized scope.', likelyOutcome: 'contested', argument: 'The Dutch VPN logs were obtained via a Mutual Legal Assistance Treaty request narrowly authorized for a different account. The government overreached by extracting logs beyond the treaty\'s authorization, requiring suppression.' },
        { id: 'M3', title: 'Motion to Bifurcate Liability and Damages (Deaths)', basis: 'Federal Rule of Criminal Procedure 14 — joining the murder element with the fraud counts is prejudicial.', likelyOutcome: 'denied', argument: 'Trying the patient deaths alongside the computer-fraud counts inflames the jury and prevents a dispassionate evaluation of the attribution evidence. The phases should be bifurcated to protect the defendant\'s right to a fair trial on the technical question of authorship.' }
      ]
    }
  },
  {
    id: 'case-004',
    title: 'People v. Angela Reyes',
    crimeType: 'FIRST-DEGREE MURDER / SELF-DEFENSE',
    complexity: 'high',
    favorability: 'balanced',
    jurisdiction: 'Maricopa County Superior Court, Arizona',
    year: 2024,
    judge: 'Hon. Robert Castellano',
    opposingCounsel: { prosecution: 'Deputy County Attorney Helen Ward', defense: 'Attorney Vanessa Pruitt' },
    summary: 'A battered wife stabbed her sleeping husband eleven times after years of documented abuse, then concealed the body for twelve hours before calling her sister. The defense invokes Battered Woman Syndrome; the prosecution argues a sleeping man posed no imminent threat.',
    backstory: `Angela Reyes, 35, endured what records describe as years of brutal domestic violence. Hospital files document six emergency-room visits for injuries consistent with assault. Two restraining orders had been issued against her husband, Marco, 41, both later withdrawn after he persuaded her to return home. Neighbors recall screaming, broken windows, and Angela appearing in public with bruises she attributed to falls.

On the night of August 22, 2024, after what Angela describes as an evening of threats that "tonight would be the last night," she waited until Marco fell asleep. She retrieved a kitchen knife and stabbed him eleven times. He did not wake until the first blows landed. Angela then sat in the dark for nearly twelve hours before calling her sister, who called 911.

The prosecution charges first-degree premeditated murder. Their theory is stark: Marco was asleep. There was no knife at his throat, no fist raised. Whatever he had done before, in that moment he posed no imminent threat, and Arizona self-defense law requires imminence. The twelve-hour delay and concealment, they argue, show consciousness of guilt.

The defense will present Battered Woman Syndrome through an expert in domestic violence psychology. They argue that a chronically abused woman perceives danger differently — that for Angela, the threat was constant and the moment of sleep was the only window of survival. The jury must decide whether the law's narrow definition of imminence can stretch to fit a lifetime of terror.`,
    accused: { name: 'Angela Reyes', age: 35, occupation: 'Part-time bookkeeper', background: 'Survivor of documented long-term domestic abuse; six ER visits and two restraining orders against the victim. No prior criminal record.', priorRecord: 'No prior criminal record.' },
    victim: { name: 'Marco Reyes', age: 41, occupation: 'Construction foreman', relationship: 'Spouse' },
    charges: [
      { count: 1, charge: 'First-Degree Premeditated Murder', penal: 'Ariz. Rev. Stat. § 13-1105', maxSentence: 'Life or natural life' },
      { count: 2, charge: 'Tampering with Physical Evidence', penal: 'Ariz. Rev. Stat. § 13-2809', maxSentence: '1-3.75 years' }
    ],
    prosecutionTheory: 'Angela Reyes waited until her husband was asleep and defenseless, then stabbed him eleven times in a deliberate, premeditated killing. Arizona law requires an imminent threat for self-defense, and a sleeping man poses none. Her twelve-hour delay and concealment of the body prove she knew she had committed murder, not self-defense.',
    defenseTheory: 'Angela Reyes is a survivor who lived under a constant, credible threat of death. Years of documented abuse rewired her perception of danger; through the lens of Battered Woman Syndrome, the threat was ever-present and inescapable. She acted to save her own life in the only window she believed she had, and her shock-driven delay reflects trauma, not guilt.',
    prosecutionStrategies: ['Emphasize the victim was asleep — no imminent threat under Arizona law', 'Use the eleven stab wounds to argue rage and overkill, not defense', 'Frame the twelve-hour delay and concealment as consciousness of guilt', 'Argue Battered Woman Syndrome explains fear but not premeditated killing'],
    defenseStrategies: ['Present Battered Woman Syndrome expert testimony to reframe imminence', 'Introduce the full history of abuse — ER records, restraining orders', 'Explain the delay as a trauma response, not concealment', 'Humanize Angela as a survivor with no other escape'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Autopsy report documenting eleven stab wounds and confirming the victim was lying down and likely asleep when the attack began.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Crime-scene photographs showing the body had been partially covered and the bedroom cleaned during the twelve-hour delay.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Phone records establishing a twelve-hour gap between the estimated time of death and Angela\'s call to her sister.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'The kitchen knife with Angela\'s fingerprints, recovered washed and placed back in the kitchen drawer.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Hospital records documenting six emergency-room visits for injuries consistent with assault over a four-year period.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Two restraining orders issued against Marco Reyes, with supporting affidavits describing threats to kill Angela.', strength: 'strong' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Expert report from Dr. Lenore Harmon on Battered Woman Syndrome explaining altered threat perception in chronic abuse victims.', strength: 'moderate' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Neighbor statements describing frequent violent altercations and Angela appearing with visible injuries.', strength: 'moderate' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. Howard Min', role: 'Maricopa County Forensic Pathologist', testimony: 'Will testify the victim was lying down and likely asleep at the onset, and that eleven wounds indicate sustained, deliberate force.', weaknesses: 'Cannot speak to Angela\'s state of mind or the history of abuse.', aiPersona: 'You are Dr. Howard Min, a forensic pathologist. You will testify clinically that Marco was supine and likely asleep when the first blows landed, and that eleven wounds reflect repeated, deliberate strikes. You stick to the physical evidence and will not speculate about motive, fear, or what abuse Angela may have suffered.' },
        { id: 'PW2', name: 'Detective Carla Briggs', role: 'Lead Homicide Detective', testimony: 'Will testify to the cleaned scene, the washed knife, the covered body, and the twelve-hour delay as indicators of consciousness of guilt.', weaknesses: 'Acknowledged in her report that Angela was visibly traumatized and disoriented when interviewed.', aiPersona: 'You are Detective Carla Briggs, lead homicide detective. You found a cleaned bedroom, a washed knife returned to the drawer, and a partially covered body. You believe these show consciousness of guilt. You are professional and will concede, if asked, that Angela appeared traumatized and disoriented, but you maintain the concealment was deliberate.' },
        { id: 'PW3', name: 'Greg Saunders', role: 'Victim\'s Coworker', testimony: 'Will testify Marco never appeared violent at work and described his marriage as strained but ordinary.', weaknesses: 'Knew nothing of the home life; saw only Marco\'s public persona.', aiPersona: 'You are Greg Saunders, Marco\'s coworker. You will testify Marco was a normal guy at the job site who never seemed violent. You genuinely never saw that side of him. You must admit you knew nothing about what happened inside their home and only saw Marco at work.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Lenore Harmon', role: 'Domestic Violence Psychologist', testimony: 'Will testify that Battered Woman Syndrome alters a victim\'s perception of imminence, and that Angela\'s actions are consistent with a survivor in fear for her life.', weaknesses: 'Cannot say the threat was legally imminent at the moment of the killing; the syndrome explains fear, not the law.', aiPersona: 'You are Dr. Lenore Harmon, a psychologist specializing in domestic violence and Battered Woman Syndrome. You evaluated Angela and reviewed her history. You will explain that chronic abuse creates a state of constant, credible threat perception and learned helplessness. You are empathetic and authoritative. You must concede the syndrome explains Angela\'s perception of danger but cannot itself establish legal imminence.' },
        { id: 'DW2', name: 'Maria Delgado', role: 'Angela\'s Sister', testimony: 'Will testify to years of witnessing the abuse and to Angela\'s shattered, incoherent state during the 911 call.', weaknesses: 'Biased as a family member; did not witness the killing.', aiPersona: 'You are Maria Delgado, Angela\'s sister. You watched Marco terrorize her for years and begged her to leave. When Angela called you, she was barely able to speak, shaking and incoherent. You love your sister and want the jury to understand what she endured. You did not see the killing and will admit your closeness to Angela.' },
        { id: 'DW3', name: 'Angela Reyes', role: 'Defendant (if called)', testimony: 'If called: will testify Marco threatened to kill her that night, that she believed sleeping was the only safe window, and that she froze in shock afterward.', weaknesses: 'The premeditated nature of waiting for him to sleep is hard to reconcile with imminence; cross will probe the delay.', aiPersona: 'You are Angela Reyes, the defendant. You are quiet, traumatized, and honest. Marco had told you "tonight is the last night," and you believed he would kill you. You waited until he slept because it was the only moment you were not in his reach. Afterward you froze; you do not fully remember the hours that passed. You are not a calculating killer — you were a terrified woman fighting to survive. Do not exaggerate; speak from pain.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Admit Battered Woman Syndrome Expert Testimony', basis: 'Relevance and Arizona case law permitting expert testimony on the effects of domestic abuse on perception.', likelyOutcome: 'granted', argument: 'Expert testimony on Battered Woman Syndrome is essential for the jury to evaluate Angela\'s perception of threat. Arizona courts recognize such testimony as relevant to self-defense, and excluding it would deprive the jury of the context needed to assess her state of mind.' },
        { id: 'M2', title: 'Motion to Admit Prior 911 Calls and Restraining Orders', basis: 'Relevance — the history of abuse is central to the self-defense claim.', likelyOutcome: 'granted', argument: 'The prior 911 calls, ER records, and restraining orders establish the pattern of violence that shaped Angela\'s perception of danger. This history is directly relevant to her self-defense claim and is not unfairly prejudicial.' },
        { id: 'M3', title: 'Motion to Exclude Evidence of Body Concealment', basis: 'Arizona Rule of Evidence 403 — the delay reflects trauma, not guilt, and is unfairly prejudicial.', likelyOutcome: 'denied', argument: 'The prosecution will use the twelve-hour delay to suggest guilt, but for a trauma victim such a reaction is consistent with shock. Its prejudicial inference of consciousness of guilt substantially outweighs its probative value.' }
      ]
    }
  },
  {
    id: 'case-005',
    title: 'United States v. Phillip Blackwood',
    crimeType: 'SECURITIES FRAUD / WIRE FRAUD',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'U.S. District Court, S.D.N.Y.',
    year: 2025,
    judge: 'Hon. Eleanor Whitfield (SDNY)',
    opposingCounsel: { prosecution: 'AUSA Daniel Reyes', defense: 'Attorney Gregory Holt' },
    summary: 'A hedge fund manager ran a $280 million Ponzi scheme over six years, fabricating algorithmic-trading returns that defrauded 340 investors. The defense claims he genuinely believed the fund would recover and that his CFO doctored the records without his knowledge.',
    backstory: `Blackwood Capital Futures marketed itself as a quantitative powerhouse, promising steady double-digit returns through a proprietary algorithmic-trading strategy. For six years, founder Phillip Blackwood, 51, courted pensioners, small institutions, and wealthy families, sending glossy quarterly statements showing consistent gains. In reality, the algorithm lost money almost from the start. Blackwood paid earlier investors with the deposits of newer ones — a textbook Ponzi scheme that ultimately swallowed $280 million from 340 investors.

The scheme unraveled in late 2024 when a wave of redemption requests exceeded available cash. Investors discovered their "balances" were fiction. The SEC and FBI moved in, seizing servers and freezing accounts. Forensic accountants reconstructed years of fabricated performance reports and traced the circular flow of investor money.

Blackwood's defense is that he was a true believer, not a con man. He claims he was convinced the strategy would eventually turn around and that his chief financial officer, Raymond Tate, manipulated the books to hide losses without his knowledge. Tate, however, has pleaded guilty and agreed to cooperate, testifying that Blackwood personally directed the fabrications and approved every doctored statement.

The prosecution will present a paper trail of edited reports, marketing materials Blackwood signed, and the devastating testimony of investors who lost retirements and college funds. The central battle is one of knowledge and intent: did Phillip Blackwood knowingly orchestrate a fraud, or was he a deluded optimist betrayed by his own CFO?`,
    accused: { name: 'Phillip Blackwood', age: 51, occupation: 'Hedge fund founder and manager', background: 'Wharton MBA, former bank trader, founder of Blackwood Capital Futures. No prior criminal record but two prior NFA regulatory inquiries.', priorRecord: 'No criminal convictions; two prior National Futures Association regulatory inquiries.' },
    victim: { name: '340 defrauded investors', age: 'Various', occupation: 'Pensioners, small institutions, and families', relationship: 'Clients/investors' },
    charges: [
      { count: 1, charge: 'Securities Fraud', penal: '15 U.S.C. §§ 78j(b) & 78ff', maxSentence: '20 years' },
      { count: 2, charge: 'Wire Fraud', penal: '18 U.S.C. § 1343', maxSentence: '20 years' },
      { count: 3, charge: 'Money Laundering', penal: '18 U.S.C. § 1956', maxSentence: '20 years' }
    ],
    prosecutionTheory: 'Phillip Blackwood knowingly ran a $280 million Ponzi scheme, fabricating returns and paying old investors with new money for six years. He personally signed marketing materials and directed his CFO to doctor performance reports. His claim of ignorance collapses against a paper trail bearing his own signature and his CFO\'s cooperating testimony.',
    defenseTheory: 'Phillip Blackwood was a genuine believer in his strategy who fell victim to his own optimism and to a CFO who hid the losses. He never intended to deceive — he expected the fund to recover. The fraud was orchestrated by Raymond Tate, who now blames Blackwood to save himself under a cooperation deal.',
    prosecutionStrategies: ['Present fabricated reports bearing Blackwood\'s edits and signatures', 'Use CFO Tate\'s cooperating testimony on Blackwood\'s direct orders', 'Trace the circular Ponzi money flow through forensic accounting', 'Humanize the harm with devastated investor testimony'],
    defenseStrategies: ['Attack Tate\'s credibility as a cooperator with a motive to lie', 'Argue Blackwood genuinely believed the fund would recover (no intent)', 'Suggest Tate concealed losses without Blackwood\'s knowledge', 'Challenge whether Blackwood understood the technical accounting'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Forensic accounting reconstruction showing that for six years the fund paid existing investors with new deposits while the trading strategy lost money.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Fabricated quarterly performance reports with metadata showing edits made from Blackwood\'s own computer account.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Marketing materials and investor letters personally signed by Blackwood promising returns the fund never earned.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Cooperating testimony of CFO Raymond Tate that Blackwood personally directed the fabrication of returns.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Bank records showing Blackwood diverted $9 million in investor funds to personal real estate and a yacht.', strength: 'strong' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Internal emails in which Blackwood expresses genuine optimism that the strategy would "turn the corner next quarter."', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Tate\'s cooperation agreement showing he received a substantially reduced sentence in exchange for testimony.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Expert financial analysis suggesting some report edits originated from Tate\'s credentials, not Blackwood\'s.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Investigator Karen Sloane', role: 'SEC Enforcement Investigator', testimony: 'Will testify to the structure of the Ponzi scheme, the fabricated filings, and the regulatory red flags Blackwood ignored.', weaknesses: 'Did not personally observe Blackwood directing fabrications; relies on documents.', aiPersona: 'You are Karen Sloane, an SEC enforcement investigator. You unraveled the Blackwood Capital scheme. You will explain in plain terms how a Ponzi works and how the filings were fabricated. You are methodical and credible. You will concede you never personally saw Blackwood order a fabrication, but the documentary record and money flow leave no doubt it was a fraud.' },
        { id: 'PW2', name: 'Raymond Tate', role: 'Former CFO (Cooperating Witness)', testimony: 'Will testify that Blackwood personally directed him to doctor performance reports and approved every false statement.', weaknesses: 'Pleaded guilty and is testifying for a reduced sentence; strong motive to shift blame.', aiPersona: 'You are Raymond Tate, the former CFO who pleaded guilty and is cooperating. You will testify that Blackwood directed the fabrications and approved every doctored report. You are nervous and somewhat defensive about your own role. You must admit you got a reduced sentence for cooperating, but you insist you are telling the truth and that Blackwood ran the scheme.' },
        { id: 'PW3', name: 'Margaret Ellison', role: 'Defrauded Investor', testimony: 'Will testify she invested her late husband\'s pension and lost everything, relying on Blackwood\'s personal assurances.', weaknesses: 'Emotional testimony; speaks to harm rather than Blackwood\'s knowledge.', aiPersona: 'You are Margaret Ellison, a 72-year-old widow who invested your husband\'s entire pension with Blackwood after he assured you personally it was safe. You lost everything and now work part-time to survive. You are dignified but heartbroken. You will describe what Blackwood told you and what you lost, though you cannot speak to the inner workings of the fund.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Alan Pierce', role: 'Forensic Accounting Expert (Defense)', testimony: 'Will testify that some fabricated edits trace to Tate\'s credentials and that the accounting was complex enough for a manager to misunderstand.', weaknesses: 'Cannot explain Blackwood\'s signed marketing materials or the diverted personal funds.', aiPersona: 'You are Dr. Alan Pierce, a forensic accounting expert for the defense. You will testify that the report system was shared, that some edits appear to originate from Tate\'s credentials, and that the strategy\'s accounting was genuinely complex. You are credible and measured. You must concede you cannot explain away the marketing materials Blackwood signed or the millions diverted to his personal accounts.' },
        { id: 'DW2', name: 'Phillip Blackwood', role: 'Defendant (if called)', testimony: 'If called: will testify he believed the fund would recover, trusted Tate with the books, and never intended to defraud anyone.', weaknesses: 'The diverted $9 million and his signed false statements are nearly impossible to reconcile with good faith.', aiPersona: 'You are Phillip Blackwood, the defendant. You are polished, confident, and a natural salesman. You insist you truly believed your strategy would recover and that Tate handled the books. You deny knowingly defrauding anyone. Do not confess. When confronted with the yacht and real estate, characterize them as legitimate compensation. Be careful — your charm can read as arrogance to a jury that lost their savings.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress SEC-Subpoenaed Records', basis: 'Fourth Amendment / overbroad administrative subpoena exceeding its stated scope.', likelyOutcome: 'denied', argument: 'The SEC\'s administrative subpoena was framed for trading records but was used to seize the firm\'s entire server infrastructure. This overbroad sweep exceeded the subpoena\'s authorized scope and the resulting evidence should be suppressed.' },
        { id: 'M2', title: 'Motion to Sever Wire Fraud from Securities Fraud Counts', basis: 'Federal Rule of Criminal Procedure 8 — improper joinder of distinct schemes.', likelyOutcome: 'denied', argument: 'The wire fraud and securities fraud counts rest on different evidentiary theories and risk confusing the jury. Trying them together allows spillover prejudice and they should be severed.' },
        { id: 'M3', title: 'Motion to Limit Cooperator Testimony', basis: 'Due process — the cooperation agreement creates an overwhelming incentive to fabricate.', likelyOutcome: 'contested', argument: 'Raymond Tate received a dramatically reduced sentence contingent on testimony favorable to the government. The jury should be specially instructed, and his testimony limited, to guard against fabrication driven by his cooperation incentive.' }
      ]
    }
  },
  {
    id: 'case-006',
    title: 'People v. Nathan Reeves',
    crimeType: 'MASS MURDER',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'Travis County District Court, Texas',
    year: 2024,
    judge: 'Hon. Sandra Whitlock',
    opposingCounsel: { prosecution: 'Assistant DA Marcus Bell', defense: 'Attorney Diane Cortez' },
    summary: 'A recently fired software engineer shot and killed six colleagues at Meridian Tech in Austin. The defense pleads Not Guilty by Reason of Insanity, citing paranoid schizophrenia and command hallucinations, while the prosecution points to detailed planning as proof of sanity.',
    backstory: `On the morning of October 3, 2024, Nathan Reeves, 33, returned to the Meridian Tech offices in Austin three weeks after being terminated. Carrying a legally purchased semiautomatic rifle, he moved through the open-plan office and opened fire, killing six former colleagues and wounding four others before being subdued by responding officers. The rampage lasted under five minutes.

A search of Reeves\'s home computer recovered a 40-page document the prosecution calls a "manifesto," detailing his grievances against specific coworkers and describing the layout of the office. The weapon had been purchased three weeks before the shooting — the same week he was fired. Receipts showed he had also bought extra magazines and practiced at a local range.

Reeves has a documented psychiatric history. He was diagnosed with paranoid schizophrenia at 24, hospitalized twice, and prescribed antipsychotic medication he had stopped taking months earlier. His mother will testify he believed coworkers were transmitting thoughts into his head and that "voices" told him they were going to harm him first. The defense will argue he could not understand the wrongfulness of his actions — the legal standard for insanity in Texas.

The prosecution counters that the manifesto, the advance weapon purchase, the range practice, and the targeted selection of victims all demonstrate planning, organization, and an understanding that what he was doing was wrong. The case will turn on a battle of psychiatric experts over whether Nathan Reeves, in that moment, knew right from wrong.`,
    accused: { name: 'Nathan Reeves', age: 33, occupation: 'Software engineer (recently terminated)', background: 'Diagnosed with paranoid schizophrenia at 24, hospitalized twice, off medication for several months. No prior criminal record.', priorRecord: 'No prior criminal record; two prior psychiatric hospitalizations.' },
    victim: { name: 'Six Meridian Tech employees', age: '27 to 54', occupation: 'Software engineers and managers', relationship: 'Former colleagues' },
    charges: [
      { count: 1, charge: 'Capital Murder (Multiple Persons)', penal: 'Tex. Penal Code § 19.03(a)(7)', maxSentence: 'Death or life without parole' },
      { count: 2, charge: 'Aggravated Assault with a Deadly Weapon', penal: 'Tex. Penal Code § 22.02', maxSentence: '2-20 years' }
    ],
    prosecutionTheory: 'Nathan Reeves meticulously planned and executed the murder of six colleagues. He bought the weapon weeks in advance, practiced at a range, wrote a detailed manifesto, and selected specific targets. This level of organization and goal-directed behavior proves he understood the wrongfulness of his conduct, defeating the insanity defense.',
    defenseTheory: 'Nathan Reeves was in the grip of untreated paranoid schizophrenia and command hallucinations that convinced him his coworkers were going to kill him. He could not understand that his actions were wrong because his reality was distorted by psychosis. Under Texas law, a person who cannot appreciate the wrongfulness of his conduct due to severe mental illness is not criminally responsible.',
    prosecutionStrategies: ['Use the manifesto and advance planning to show goal-directed, rational behavior', 'Emphasize the weapon purchase timing and range practice', 'Argue targeted victim selection reflects understanding, not random psychosis', 'Present a forensic psychiatrist who finds he knew right from wrong'],
    defenseStrategies: ['Establish the long, documented history of paranoid schizophrenia', 'Present command-hallucination evidence through expert and family testimony', 'Argue planning can coexist with a delusional belief in self-defense', 'Show he stopped medication and decompensated before the shooting'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'A 40-page document recovered from Reeves\'s computer detailing grievances against named coworkers and the office layout.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Firearm purchase records and range receipts showing the rifle and extra magazines were bought three weeks before the shooting.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Surveillance and witness accounts showing Reeves bypassed some employees to target specific named individuals.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Forensic psychiatric evaluation by Dr. Owen Marsh concluding Reeves understood the wrongfulness of his actions despite his illness.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Medical records documenting a paranoid schizophrenia diagnosis at age 24 and two prior involuntary hospitalizations.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Pharmacy records showing Reeves had stopped filling his antipsychotic prescription several months before the shooting.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Expert report from Dr. Helen Vasquez concluding Reeves was experiencing command hallucinations and could not appreciate wrongfulness.', strength: 'moderate' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Family testimony and journals describing Reeves\'s belief that coworkers were transmitting thoughts into his mind.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Olivia Tran', role: 'Surviving Employee', testimony: 'Will testify she watched Reeves walk past her to shoot a specific manager, suggesting deliberate target selection.', weaknesses: 'Traumatized and may have impaired recall; cannot speak to his mental state.', aiPersona: 'You are Olivia Tran, a Meridian Tech employee who survived the shooting by hiding under a desk. You saw Reeves walk right past you to shoot your manager. You are still traumatized and your account is vivid but shaken. You will describe what you saw honestly, while admitting the chaos and terror affected your perception.' },
        { id: 'PW2', name: 'Brenda Foss', role: 'HR Director, Meridian Tech', testimony: 'Will testify about Reeves\'s termination, his calm demeanor when fired, and the grievances later found in his manifesto.', weaknesses: 'Not a mental-health professional; observed only workplace behavior.', aiPersona: 'You are Brenda Foss, HR Director at Meridian Tech. You handled Reeves\'s termination. He seemed calm, even cold, when you fired him. You will describe the termination and the workplace complaints he had filed. You are not qualified to assess his mental health and will say so if asked.' },
        { id: 'PW3', name: 'Dr. Owen Marsh', role: 'Forensic Psychiatrist (Prosecution)', testimony: 'Will testify that despite Reeves\'s diagnosis, his planning and behavior show he understood his conduct was wrong.', weaknesses: 'Must concede Reeves has a genuine, severe mental illness; the insanity question is contested.', aiPersona: 'You are Dr. Owen Marsh, a forensic psychiatrist for the prosecution. You evaluated Reeves and concluded that, despite his schizophrenia, his planning, concealment, and targeted selection show he knew his actions were wrong. You are measured and will acknowledge his illness is real, but you maintain that mental illness does not equal legal insanity, and his organized conduct demonstrates appreciation of wrongfulness.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Helen Vasquez', role: 'Forensic Psychiatrist (Defense)', testimony: 'Will testify Reeves was actively psychotic, experiencing command hallucinations, and could not appreciate the wrongfulness of his conduct.', weaknesses: 'Must explain how a psychotic man executed weeks of coherent planning.', aiPersona: 'You are Dr. Helen Vasquez, a forensic psychiatrist for the defense. You examined Reeves extensively. You will testify he was in florid psychosis, driven by command hallucinations and a delusion that his coworkers would kill him. You are compassionate and authoritative. You must address the planning: explain that delusional individuals can engage in organized behavior in service of a delusion while still being unable to appreciate that the conduct is morally wrong.' },
        { id: 'DW2', name: 'Carol Reeves', role: 'Defendant\'s Mother', testimony: 'Will testify to Nathan\'s lifelong illness, his deterioration off medication, and his belief that coworkers were reading his thoughts.', weaknesses: 'Biased as his mother; not a clinician.', aiPersona: 'You are Carol Reeves, Nathan\'s mother. You have watched your son battle schizophrenia since he was 24. In the months before the shooting he stopped his medication and grew terrified, insisting his coworkers were transmitting thoughts into his head. You love him and are devastated for the victims too. You are not a doctor, but you know your son was not in his right mind.' },
        { id: 'DW3', name: 'Nathan Reeves', role: 'Defendant (if called)', testimony: 'If called: would describe his delusional belief that coworkers intended to kill him and that voices commanded him to act first.', weaknesses: 'His testimony risks appearing lucid and articulate, undermining the insanity claim; rarely advisable.', aiPersona: 'You are Nathan Reeves, the defendant, living with paranoid schizophrenia. If you speak, you describe a distorted reality: you believed your coworkers were transmitting thoughts and planning to kill you, and that voices told you to protect yourself. You are not coherent in the way a healthy person is — your logic follows your delusions. You are not performing; you genuinely struggle to understand why others did not see the threat you believed was real.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion for a Competency Hearing Before Trial', basis: 'Tex. Code Crim. Proc. Art. 46B — the defendant may be incompetent to stand trial.', likelyOutcome: 'granted', argument: 'Given Reeves\'s documented psychosis and current symptoms, there is a bona fide doubt as to whether he can understand the proceedings and assist counsel. A competency hearing must precede any trial on the merits.' },
        { id: 'M2', title: 'Motion to Exclude the Manifesto', basis: 'Texas Rule of Evidence 403 — its inflammatory content substantially outweighs probative value.', likelyOutcome: 'denied', argument: 'The 40-page document is graphic and inflammatory, and admitting it invites the jury to convict out of revulsion rather than on the insanity question. Its prejudicial impact substantially outweighs its limited probative value on his mental state.' },
        { id: 'M3', title: 'Motion to Admit Full Psychiatric History', basis: 'Relevance — the history is central to the insanity defense.', likelyOutcome: 'granted', argument: 'Reeves\'s complete psychiatric history, including hospitalizations and diagnoses, is directly relevant to whether he could appreciate the wrongfulness of his conduct and must be admitted for the jury\'s consideration.' }
      ]
    }
  },
  {
    id: 'case-007',
    title: 'People v. Lorenzo Vasquez',
    crimeType: 'DRUG TRAFFICKING',
    complexity: 'high',
    favorability: 'balanced',
    jurisdiction: 'San Diego County Superior Court, California',
    year: 2025,
    judge: 'Hon. Rafael Ortega',
    opposingCounsel: { prosecution: 'Deputy DA Monica Hale', defense: 'Attorney Bruce Linden' },
    summary: 'An alleged cartel lieutenant was arrested with 85 kilograms of fentanyl in a DEA sting set up by a confidential informant working off a 20-year sentence. The defense argues entrapment, claiming Vasquez never trafficked fentanyl and only relented after six weeks of relentless pressure.',
    backstory: `On February 18, 2025, DEA agents arrested Lorenzo Vasquez, 38, in a warehouse parking lot in San Diego as he took possession of 85 kilograms of fentanyl. The bust was the culmination of a six-week operation built around a confidential informant, identified in court papers only as "CI-114," a longtime trafficker cooperating in exchange for a reduction of his own 20-year federal sentence.

The prosecution describes Vasquez as a lieutenant in a cross-border distribution network — a man with the connections and willingness to move death-dealing quantities of fentanyl. They have wiretap recordings of Vasquez negotiating price and logistics, and the seized drugs themselves, a quantity capable of producing millions of lethal doses.

The defense tells a different story. They argue Vasquez had never trafficked fentanyl in his life, that his prior record involved only marijuana, and that CI-114 spent six weeks cajoling, flattering, and pressuring him — even fronting money and threatening that a refusal would look like disrespect to dangerous people. Vasquez, they say, repeatedly declined before finally relenting. This, the defense contends, is textbook entrapment: government agents implanting criminal intent in an otherwise unwilling person.

Complicating the case, CI-114 has powerful incentives to manufacture a successful bust, and defense counsel has moved to compel disclosure of his identity and full record. The jury must decide whether Lorenzo Vasquez was a willing trafficker caught in the act, or an ordinary man entrapped into a crime he would never have committed on his own.`,
    accused: { name: 'Lorenzo Vasquez', age: 38, occupation: 'Auto-shop owner', background: 'Small-business owner with a prior marijuana-related conviction but no history of hard-drug trafficking.', priorRecord: 'One prior conviction for marijuana possession for sale (2016).' },
    victim: { name: 'Public / society', age: 'N/A', occupation: 'N/A', relationship: 'No individual victim (drug offense)' },
    charges: [
      { count: 1, charge: 'Possession for Sale of a Controlled Substance (Fentanyl)', penal: 'Cal. Health & Safety Code § 11351', maxSentence: '2-4 years plus enhancements' },
      { count: 2, charge: 'Transportation of a Controlled Substance', penal: 'Cal. Health & Safety Code § 11352', maxSentence: '3-9 years' },
      { count: 3, charge: 'Conspiracy to Traffic a Controlled Substance', penal: 'Cal. Penal Code § 182', maxSentence: 'Up to 9 years' }
    ],
    prosecutionTheory: 'Lorenzo Vasquez is a knowing participant in fentanyl trafficking who was caught red-handed taking possession of 85 kilograms. Wiretap recordings show him negotiating price and logistics like a seasoned dealer. The informant merely provided an opportunity; Vasquez supplied the willingness and the criminal intent.',
    defenseTheory: 'Lorenzo Vasquez was entrapped. He had never trafficked fentanyl and repeatedly refused for six weeks while a desperate informant, working off a 20-year sentence, pressured, flattered, and intimidated him into the deal. The government did not catch a trafficker; it manufactured one to reward its informant.',
    prosecutionStrategies: ['Play wiretap recordings of Vasquez negotiating like an experienced dealer', 'Emphasize the sheer quantity — 85 kilograms shows he was no novice', 'Argue predisposition: he knew the players and the prices', 'Frame the CI as merely providing an opportunity, not implanting intent'],
    defenseStrategies: ['Establish the six weeks of CI pressure and Vasquez\'s repeated refusals', 'Attack CI-114\'s overwhelming incentive to fabricate a bust', 'Show Vasquez had no prior fentanyl history (no predisposition)', 'Move to compel the CI\'s identity and record under Roviaro'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Eighty-five kilograms of fentanyl seized from Vasquez at the moment of the arrest.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Wiretap recordings of Vasquez negotiating price, quantity, and delivery logistics with the informant.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Forensic chemistry report confirming the seized substance is fentanyl at 92% purity.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Surveillance video of Vasquez arriving at the warehouse and loading the packages into his vehicle.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Transcripts of earlier recorded calls in which Vasquez repeatedly declines the informant\'s overtures over several weeks.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'CI-114\'s cooperation agreement showing a 20-year sentence to be reduced based on the success of his operations.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Vasquez\'s criminal history showing no prior involvement with fentanyl or any hard-drug trafficking.', strength: 'moderate' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Defense investigator\'s report documenting the informant\'s pattern of pressuring reluctant targets in prior operations.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Agent Daniel Frost', role: 'DEA Special Agent', testimony: 'Will testify to the structure of the operation, the wiretaps, and Vasquez\'s fluent negotiation as evidence of a seasoned trafficker.', weaknesses: 'Relied heavily on a compromised informant; did not personally witness the six weeks of contact.', aiPersona: 'You are DEA Special Agent Daniel Frost, who ran the operation. You will testify Vasquez negotiated like a professional and took possession of 85 kilos. You are confident and experienced. You must acknowledge the operation depended on CI-114 and that the informant had incentives, but you maintain the wiretaps show Vasquez was a willing, knowledgeable trafficker.' },
        { id: 'PW2', name: 'CI-114 (Hector Salas)', role: 'Confidential Informant', testimony: 'Will testify Vasquez was eager and knowledgeable and that he merely facilitated a deal Vasquez wanted to make.', weaknesses: 'Working off a 20-year sentence; enormous motive to portray Vasquez as willing and minimize his own pressure tactics.', aiPersona: 'You are Hector Salas, "CI-114," a longtime trafficker cooperating to cut your 20-year sentence. You will testify Vasquez was a willing dealer and you just connected the dots. You are smooth and self-serving. You downplay how hard you pushed him and how many times he said no. You will resist admitting you pressured or intimidated him, because your sentence reduction depends on this bust looking clean.' },
        { id: 'PW3', name: 'Dr. Aisha Boateng', role: 'Forensic Chemist', testimony: 'Will testify the seized substance is high-purity fentanyl and quantify its lethal-dose potential.', weaknesses: 'Speaks only to the chemistry, not to who arranged the deal or whether Vasquez was entrapped.', aiPersona: 'You are Dr. Aisha Boateng, a forensic chemist. You tested the seized material and confirmed it is 92% pure fentanyl. You will explain the quantity and its lethality clinically. You have no knowledge of the investigation\'s conduct and will confine yourself strictly to the science if asked about entrapment.' }
      ],
      defense: [
        { id: 'DW1', name: 'Frank Doyle', role: 'Defense Investigator', testimony: 'Will testify to the documented pattern of CI-114 pressuring reluctant targets and to Vasquez\'s repeated refusals.', weaknesses: 'Hired by the defense; some conclusions are inferential.', aiPersona: 'You are Frank Doyle, a defense investigator and former narcotics detective. You reviewed the recordings and CI-114\'s history. You will testify Vasquez refused repeatedly and that the informant used pressure, flattery, and veiled threats — a pattern you have seen from him before. You are credible and seasoned. You will acknowledge you work for the defense but stand by your factual findings.' },
        { id: 'DW2', name: 'Lorenzo Vasquez', role: 'Defendant (if called)', testimony: 'If called: will testify he never trafficked fentanyl, refused for weeks, and only agreed after the informant frightened and pressured him.', weaknesses: 'The wiretap of him negotiating fluently is hard to square with total inexperience; cross will probe his knowledge.', aiPersona: 'You are Lorenzo Vasquez, the defendant, an auto-shop owner. You insist you never dealt fentanyl and only sold a little marijuana years ago. CI-114 kept coming back, week after week, flattering you, lending you money, and hinting that refusing would insult dangerous people. You were scared and finally gave in. Do not portray yourself as sophisticated; admit you negotiated, but explain you were repeating what the informant coached you to say. You feel trapped and used.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress Wiretap Recordings', basis: 'California Penal Code § 629.50 — defective wiretap authorization lacking adequate necessity showing.', likelyOutcome: 'contested', argument: 'The wiretap application failed to establish that normal investigative techniques had been tried and failed, as required for authorization. Without the necessity showing, the intercepts were unlawfully obtained and must be suppressed.' },
        { id: 'M2', title: 'Motion to Compel Disclosure of Informant Identity and Record', basis: 'Roviaro v. United States — the informant is a material witness to the entrapment defense.', likelyOutcome: 'contested', argument: 'CI-114 was the sole architect of the alleged crime and is the central witness to the entrapment defense. Under Roviaro, the defendant\'s right to a fair trial outweighs the informant\'s privilege, and his identity and full record must be disclosed.' },
        { id: 'M3', title: 'Motion for Jury Instruction on Entrapment', basis: 'California law recognizing entrapment where government conduct would induce a normally law-abiding person to commit the crime.', likelyOutcome: 'granted', argument: 'The evidence of six weeks of inducement and repeated refusals raises a triable entrapment defense. The jury must be instructed that if government conduct would have induced a normally law-abiding person, they must acquit.' }
      ]
    }
  },
  {
    id: 'case-008',
    title: 'People v. Robert Schulz',
    crimeType: 'SERIAL RAPE',
    complexity: 'medium',
    favorability: 'prosecution',
    jurisdiction: 'King County Superior Court, Washington',
    year: 2024,
    judge: 'Hon. Teresa Nakamura',
    opposingCounsel: { prosecution: 'Deputy Prosecutor Alan Reyes', defense: 'Attorney Mark Sullivan' },
    summary: 'A real estate broker is accused of raping four women he met through dating apps over a two-year period, with DNA linking him to each. The defense claims every encounter was consensual and attacks a chain-of-custody lapse on one sample stored improperly for 72 hours.',
    backstory: `Between 2022 and 2024, four women in the Seattle area reported being raped by men they had met on dating apps. The cases were initially handled separately, but a DNA hit linked all four to the same man: Robert Schulz, 38, a successful real estate broker known for his polished charm. Each woman described a similar pattern — a pleasant first date that turned violent once they were alone.

The four accounts are strikingly consistent in detail, describing the same escalation, the same use of body weight to pin them, and the same dismissive comments afterward. DNA evidence connects Schulz to all four encounters. The prosecution intends to try the charges together, arguing the pattern itself is powerful evidence that these were not isolated misunderstandings but a predatory course of conduct.

Schulz maintains that every encounter was consensual. He is a single man who dated frequently, he says, and these women regretted the encounters or fabricated claims. His defense will hammer at one vulnerability: the DNA sample from the second complainant was left at room temperature for 72 hours due to a lab refrigeration failure, raising chain-of-custody and degradation questions.

The defense will also probe minor inconsistencies among the accounts and invoke Washington\'s rape shield law strategically. The prosecution will rely on the consistency of four independent women, the DNA, and the dating-app records that place Schulz with each victim. The jury must weigh a credible pattern against a defense of consent and a single forensic misstep.`,
    accused: { name: 'Robert Schulz', age: 38, occupation: 'Real estate broker', background: 'Successful broker described as charming and well-connected; active on multiple dating apps. No prior convictions.', priorRecord: 'No prior criminal record; one prior dismissed harassment complaint.' },
    victim: { name: 'Four women (identified as Jane Does 1-4)', age: '24 to 33', occupation: 'Various professionals', relationship: 'Dating-app matches' },
    charges: [
      { count: 1, charge: 'Rape in the First Degree (Count 1)', penal: 'Wash. Rev. Code § 9A.44.040', maxSentence: 'Life imprisonment' },
      { count: 2, charge: 'Rape in the Second Degree (Count 2)', penal: 'Wash. Rev. Code § 9A.44.050', maxSentence: 'Up to life' },
      { count: 3, charge: 'Rape in the Second Degree (Count 3)', penal: 'Wash. Rev. Code § 9A.44.050', maxSentence: 'Up to life' },
      { count: 4, charge: 'Rape in the Second Degree (Count 4)', penal: 'Wash. Rev. Code § 9A.44.050', maxSentence: 'Up to life' }
    ],
    prosecutionTheory: 'Robert Schulz is a serial predator who used dating apps to find and assault four women over two years. DNA links him to every victim, and the four independent accounts describe the same predatory pattern. Consent is implausible across four separate women telling the same story.',
    defenseTheory: 'Robert Schulz is a single man who dated often, and every encounter was consensual. The complainants reinterpreted regretted encounters as assaults. The forensic case is flawed — one key DNA sample sat unrefrigerated for 72 hours — and the accounts contain inconsistencies that undermine their reliability.',
    prosecutionStrategies: ['Try the counts together to show a predatory pattern', 'Present consistent testimony from four independent victims', 'Anchor the case in DNA linking Schulz to each encounter', 'Use dating-app records to corroborate timeline and contact'],
    defenseStrategies: ['Press the 72-hour chain-of-custody and degradation issue on Count 2', 'Argue consent for each encounter individually', 'Highlight minor inconsistencies among the accounts', 'Use the rape shield law carefully to limit prejudicial framing'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'DNA analysis linking Schulz to all four complainants through forensic samples.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Consistent testimony from four independent victims describing the same escalation and assault pattern.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Dating-app records and messages corroborating that Schulz met and arranged to be alone with each complainant.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Sexual assault nurse examiner reports documenting physical injuries consistent with non-consensual contact for three of the four victims.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Lab incident report showing the Count 2 DNA sample was stored at room temperature for 72 hours during a refrigeration failure.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Defense forensic expert report opining that degradation could compromise the reliability of the Count 2 result.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Dating-app messages showing friendly, flirtatious exchanges with the complainants before and, in two cases, after the encounters.', strength: 'weak' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Notes documenting inconsistencies between complainants\' initial statements and later testimony on peripheral details.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. Naomi Childs', role: 'Forensic DNA Analyst', testimony: 'Will testify the DNA matches link Schulz to all four victims and that the Count 2 result remains scientifically valid despite storage issues.', weaknesses: 'Must concede the 72-hour storage lapse deviated from protocol on the Count 2 sample.', aiPersona: 'You are Dr. Naomi Childs, a forensic DNA analyst. You will testify the profiles match Schulz across all four cases to a high statistical certainty. You are precise and confident. You must acknowledge the Count 2 sample was improperly stored for 72 hours, but you will explain why, in your professional opinion, the resulting profile remains reliable and not meaningfully degraded.' },
        { id: 'PW2', name: 'Jane Doe 1', role: 'Complainant (Count 1)', testimony: 'Will testify Schulz pinned her with his body weight and ignored her refusals after a first date.', weaknesses: 'Defense will probe why she continued some contact afterward; emotional testimony.', aiPersona: 'You are Jane Doe 1, the first complainant. You met Schulz on a dating app, had a nice dinner, and were assaulted when you were alone with him. You said no clearly; he used his weight to hold you down. You are composed but it is painful to recount. You will answer honestly even when the defense probes uncomfortable details, without changing your core account.' },
        { id: 'PW3', name: 'Jane Doe 3', role: 'Complainant (Count 3)', testimony: 'Will testify to an assault matching the same pattern and to Schulz\'s dismissive comments afterward.', weaknesses: 'Delayed reporting; defense will question the gap.', aiPersona: 'You are Jane Doe 3, the third complainant. You were assaulted by Schulz in the same way the others describe. You did not report immediately because you were ashamed and afraid no one would believe you. You are nervous but resolute. You will explain your delayed reporting honestly and stand by what happened.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Phillip Grant', role: 'Forensic Expert (Defense)', testimony: 'Will testify that the 72-hour unrefrigerated storage could degrade DNA and undermine the reliability of the Count 2 result.', weaknesses: 'Cannot dispute the matches on the three properly stored samples.', aiPersona: 'You are Dr. Phillip Grant, a forensic expert for the defense. You will testify that storing a DNA sample unrefrigerated for 72 hours can cause degradation that affects reliability, and that the Count 2 result should be viewed with caution. You are credible and careful. You must concede you cannot challenge the matches from the three properly stored samples.' },
        { id: 'DW2', name: 'Robert Schulz', role: 'Defendant (if called)', testimony: 'If called: will testify all four encounters were consensual and that the women misremembered or regretted the encounters.', weaknesses: 'Four consistent accusers and DNA make a consent defense across all counts extremely difficult; cross will be brutal.', aiPersona: 'You are Robert Schulz, the defendant, a charming and articulate broker. You insist every encounter was consensual and that you never forced anyone. You suggest the women regretted the encounters. Do not confess. Stay composed and likable, but be aware that appearing too smooth or dismissive of four women\'s accounts can deeply damage you with a jury. Acknowledge the encounters happened while firmly maintaining they were consensual.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude the Count 2 DNA Sample', basis: 'Chain of custody and reliability — the sample was stored unrefrigerated for 72 hours.', likelyOutcome: 'contested', argument: 'The Count 2 DNA sample was left at room temperature for 72 hours in violation of lab protocol, creating a substantial risk of degradation. The chain of custody and reliability are so compromised that the result should be excluded from evidence.' },
        { id: 'M2', title: 'Motion in Limine Under the Rape Shield Law', basis: 'Wash. Rev. Code § 9A.44.020 — excluding evidence of the complainants\' sexual history.', likelyOutcome: 'granted', argument: 'The defense must be barred from introducing the complainants\' prior sexual conduct or app activity to imply consent. Washington\'s rape shield law squarely prohibits such evidence, which is irrelevant and prejudicial.' },
        { id: 'M3', title: 'Motion to Sever the Counts', basis: 'Improper joinder — trying four separate incidents together is prejudicial.', likelyOutcome: 'denied', argument: 'Joining four separate alleged assaults invites the jury to convict based on propensity rather than the evidence for each count. The counts should be severed and tried individually to avoid prejudicial spillover.' }
      ]
    }
  },
  {
    id: 'case-009',
    title: 'People v. Cassandra Webb',
    crimeType: 'FIRST-DEGREE MURDER',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'Fulton County Superior Court, Georgia',
    year: 2024,
    judge: 'Hon. Gerald Pinckney',
    opposingCounsel: { prosecution: 'Assistant DA Naomi Frank', defense: 'Attorney Charles Beaumont' },
    summary: 'A design-firm partner is accused of murdering her co-founder with arsenic over four months after the victim discovered she was embezzling. The defense argues the victim\'s herbal supplements contained trace arsenic and that no direct evidence ties Webb to the poison.',
    backstory: `Cassandra Webb, 47, and Diane Frasier built Frasier & Webb Design into a $15 million firm over fifteen years. Their partnership soured in early 2024 when Frasier, reviewing the books, discovered roughly $600,000 in unexplained transfers traced to Webb. Frasier confronted Webb and signaled she intended to dissolve the partnership and possibly involve the authorities.

Over the following four months, Diane Frasier grew mysteriously ill — fatigue, vomiting, tingling in her hands and feet, hair loss, and confusion. Doctors were baffled until, weeks before her death in June 2024, tests revealed chronic arsenic poisoning. She died despite treatment. Segmental analysis of her hair later mapped a timeline of escalating arsenic exposure that began shortly after she confronted Webb.

Under the firm\'s buy-sell agreement, Webb stood to acquire Frasier\'s entire stake upon her death, inheriting the firm and erasing the partner who could expose the embezzlement. Investigators found that Webb had purchased rat poison containing arsenic compounds and that she frequently prepared coffee and meals for Frasier in their shared office.

The defense argues there is no direct evidence Webb administered anything. They will present an expert on arsenic-contaminated herbal supplements — Frasier took several daily — and argue the embezzlement, while damaging, does not prove murder. The prosecution counters with the hair-analysis timeline, the financial motive, the buy-sell windfall, and the rat-poison purchase. The case is a circumstantial mosaic, and the jury must decide whether the pieces form a portrait of a poisoner.`,
    accused: { name: 'Cassandra Webb', age: 47, occupation: 'Interior design firm co-founder', background: 'Co-founder of a $15 million design firm; under financial pressure after embezzling from the partnership. No prior record.', priorRecord: 'No prior criminal record.' },
    victim: { name: 'Diane Frasier', age: 49, occupation: 'Interior designer / firm co-founder', relationship: 'Business partner of 15 years' },
    charges: [
      { count: 1, charge: 'Malice Murder', penal: 'O.C.G.A. § 16-5-1(a)', maxSentence: 'Life or life without parole' },
      { count: 2, charge: 'Theft by Taking (Embezzlement)', penal: 'O.C.G.A. § 16-8-2', maxSentence: '1-10 years' }
    ],
    prosecutionTheory: 'Cassandra Webb poisoned Diane Frasier with arsenic over four months to silence the partner who had discovered her embezzlement and to seize the firm under their buy-sell agreement. The hair-analysis timeline mirrors the confrontation, she bought arsenic-based rat poison, and she controlled what Frasier ate and drank. Motive, means, and opportunity converge on Webb.',
    defenseTheory: 'Cassandra Webb is the victim of a circumstantial case with no direct proof. Diane Frasier took multiple herbal supplements known to contain trace arsenic, offering an innocent source of exposure. Embezzlement is a financial wrong, not evidence of murder, and no witness ever saw Webb poison anyone.',
    prosecutionStrategies: ['Use segmental hair analysis to align the poisoning timeline with the confrontation', 'Establish financial motive via the embezzlement and buy-sell windfall', 'Show Webb purchased arsenic-based rat poison', 'Emphasize Webb\'s control over Frasier\'s food and coffee at the office'],
    defenseStrategies: ['Present an expert on arsenic in herbal supplements as an alternate source', 'Stress the absence of any direct evidence of administration', 'Attack the precision and reliability of segmental hair analysis', 'Separate the embezzlement (financial) from the murder charge'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Segmental hair analysis mapping a timeline of escalating arsenic exposure beginning shortly after Frasier confronted Webb.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Receipts and store records showing Webb purchased arsenic-containing rat poison weeks before Frasier first fell ill.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Forensic audit documenting roughly $600,000 in transfers from the firm traced to Webb\'s personal accounts.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'The buy-sell agreement granting Webb full ownership of the firm upon Frasier\'s death.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Coworker testimony that Webb routinely prepared Frasier\'s coffee and lunches in their shared office.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Lab testing of Frasier\'s herbal supplements showing detectable trace arsenic in two products she took daily.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Expert report questioning the precision of segmental hair analysis in pinpointing exposure dates.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Evidence that the rat poison purchase coincided with a documented rodent problem at the firm\'s warehouse.', strength: 'weak' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Testimony that other employees and a cleaning service also had access to Frasier\'s workspace and food.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. Marcus Okonkwo', role: 'Forensic Toxicologist', testimony: 'Will testify the hair analysis shows escalating arsenic dosing consistent with deliberate poisoning, not dietary trace exposure.', weaknesses: 'Defense will challenge the temporal precision of hair-segment dating.', aiPersona: 'You are Dr. Marcus Okonkwo, a forensic toxicologist. You will testify the segmental hair analysis reveals a pattern of escalating arsenic exposure far exceeding what supplements could explain, consistent with repeated deliberate dosing. You are authoritative and data-driven. You will concede that hair-segment dating has some margin of error but maintain the overall pattern is unmistakably one of poisoning.' },
        { id: 'PW2', name: 'Owen Briggs', role: 'Firm Accountant', testimony: 'Will testify to the embezzlement audit and that Frasier had confronted Webb about the missing money shortly before falling ill.', weaknesses: 'Did not witness the confrontation directly; learned of it from Frasier.', aiPersona: 'You are Owen Briggs, the firm\'s accountant. You traced roughly $600,000 in transfers to Webb and brought it to Frasier\'s attention. Frasier told you she confronted Webb and planned to dissolve the partnership. You are precise with numbers. You will admit you did not personally witness the confrontation but are certain of the financial findings.' },
        { id: 'PW3', name: 'Detective Lana Pruett', role: 'Lead Detective', testimony: 'Will testify to the rat-poison purchase, the buy-sell windfall, and Webb\'s control over Frasier\'s food and coffee.', weaknesses: 'The case is entirely circumstantial; no one saw Webb administer poison.', aiPersona: 'You are Detective Lana Pruett, the lead investigator. You assembled the circumstantial case: the rat-poison purchase, the buy-sell agreement, the embezzlement motive, and Webb\'s access to Frasier\'s food. You are methodical and candid. You will acknowledge there is no eyewitness to the poisoning but explain how the totality of evidence points to Webb.' }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Evelyn Strand', role: 'Analytical Chemist (Defense)', testimony: 'Will testify that herbal supplements can contain meaningful arsenic and that hair analysis cannot reliably pinpoint exposure dates.', weaknesses: 'Trace supplement arsenic is hard to reconcile with the very high, escalating levels found.', aiPersona: 'You are Dr. Evelyn Strand, an analytical chemist for the defense. You will testify that certain herbal supplements contain detectable arsenic and that segmental hair dating is imprecise. You are credible and academic. You must concede that the levels found in Frasier far exceed typical supplement contamination, but you will argue the source and timing cannot be established with certainty.' },
        { id: 'DW2', name: 'Cassandra Webb', role: 'Defendant (if called)', testimony: 'If called: will admit financial mistakes but deny poisoning Frasier, attributing the illness to supplements or another source.', weaknesses: 'Admitting embezzlement supplies motive; the rat-poison purchase is difficult to explain innocently.', aiPersona: 'You are Cassandra Webb, the defendant. You are composed and professional. You may acknowledge financial irregularities you intended to repay, but you adamantly deny poisoning Diane, your partner of fifteen years. You attribute her illness to her supplements or some other source. The rat poison, you say, was for the warehouse rodent problem. Do not confess. Be careful not to appear cold about Diane\'s death.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude the Buy-Sell Agreement', basis: 'Relevance and Georgia Rule of Evidence 403 — financial benefit is prejudicial as proof of murder.', likelyOutcome: 'denied', argument: 'The buy-sell agreement invites the jury to infer murder from financial gain alone. Its prejudicial suggestion that profit equals guilt substantially outweighs any probative value on whether Webb administered poison.' },
        { id: 'M2', title: 'Motion to Challenge the Hair-Analysis Methodology', basis: 'Daubert/Harper reliability challenge to segmental hair dating.', likelyOutcome: 'contested', argument: 'The prosecution\'s segmental hair analysis purports to date arsenic exposure with a precision the science cannot support. The methodology fails reliability standards and should be excluded or its conclusions sharply limited.' },
        { id: 'M3', title: 'Motion to Sever the Embezzlement Count', basis: 'Improper joinder — the theft charge prejudices the murder trial.', likelyOutcome: 'denied', argument: 'Trying the embezzlement alongside the murder count brands Webb a thief before the jury weighs the poisoning evidence. The counts should be severed to prevent the financial misconduct from improperly coloring the murder verdict.' }
      ]
    }
  },
  {
    id: 'case-010',
    title: 'People v. Michael Torres',
    crimeType: 'FIRST-DEGREE MURDER',
    complexity: 'high',
    favorability: 'defense',
    jurisdiction: 'Los Angeles County Superior Court, California',
    year: 2024,
    judge: 'Hon. Felicia Drummond',
    opposingCounsel: { prosecution: 'Deputy DA Howard Pell', defense: 'Attorney Renata Vance' },
    summary: 'A man is charged with the execution-style murder of a rival in an alleged gang dispute, identified by three witnesses who have since recanted, citing fear. The defense argues the identifications were coerced and that the ballistics point to a gun registered to the defendant\'s cousin, not the defendant.',
    backstory: `Jorge Medina, 26, was shot four times at close range in a South Los Angeles alley on the night of May 9, 2024 — a killing detectives quickly labeled a gang execution. In the days after, three neighborhood witnesses identified Michael Torres, 24, as the shooter. Those identifications became the backbone of the prosecution\'s case.

In the months since, all three witnesses have recanted. Each now says they were pressured by detectives during late-night interviews, shown a single photo of Torres, and told that naming him would "make this go away." Two say they never actually saw the shooter\'s face. The recantations have gutted the eyewitness foundation of the case.

The physical evidence cuts against the prosecution as well. Shell casings recovered at the scene match a handgun registered to Torres\'s cousin, Anthony Torres — not the defendant. There is no forensic evidence placing Michael Torres at the scene: no DNA, no fingerprints, no gunshot residue. His girlfriend says he was with her across town when the shooting occurred.

The prosecution insists the recantations are themselves the product of gang intimidation and that the original identifications, made closest in time to the event, are the truth. The defense argues this is a wrongful prosecution built on coerced statements and a ballistics trail leading to someone else. The jury must decide whether to trust frightened witnesses\' first words or their later retractions.`,
    accused: { name: 'Michael Torres', age: 24, occupation: 'Warehouse worker', background: 'Lifelong neighborhood resident with alleged but undocumented gang ties; one prior misdemeanor. No history of violent felonies.', priorRecord: 'One prior misdemeanor (vandalism, 2021).' },
    victim: { name: 'Jorge Medina', age: 26, occupation: 'Auto mechanic', relationship: 'Alleged rival / acquaintance' },
    charges: [
      { count: 1, charge: 'First-Degree Murder', penal: 'Cal. Penal Code § 187(a)', maxSentence: '25 years to life' },
      { count: 2, charge: 'Discharge of a Firearm Causing Death (Enhancement)', penal: 'Cal. Penal Code § 12022.53(d)', maxSentence: '25 years to life (consecutive)' }
    ],
    prosecutionTheory: 'Michael Torres executed Jorge Medina in a gang dispute and was identified by three witnesses immediately after the killing. Those witnesses recanted only because of gang intimidation, which makes their original statements more reliable, not less. The absence of forensic evidence reflects a careful shooter, not innocence.',
    defenseTheory: 'Michael Torres is being wrongfully prosecuted. The only direct evidence against him was three identifications obtained through coercive, suggestive police tactics, and all three witnesses have recanted. The ballistics point to a gun registered to his cousin, there is no forensic link to Michael, and he has an alibi. Reasonable doubt is overwhelming.',
    prosecutionStrategies: ['Argue the recantations stem from gang intimidation, not error', 'Introduce the original identifications as the witnesses\' truest account', 'Frame the lack of forensics as the mark of a deliberate shooter', 'Challenge the girlfriend\'s alibi as biased'],
    defenseStrategies: ['Expose the coercive, single-photo identification procedure', 'Present all three recantations and the witnesses\' fear of police pressure', 'Emphasize the ballistics tie to the cousin\'s registered gun', 'Establish the alibi and the total absence of forensic evidence'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Recorded initial statements from three witnesses identifying Torres as the shooter shortly after the killing.', strength: 'moderate' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Detective testimony that gang-related witness intimidation is common and explains the later recantations.', strength: 'moderate' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Evidence of a prior dispute between Torres\'s associates and Medina suggesting a motive.', strength: 'weak' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Cell-tower data placing Torres\'s phone in the general area of South Los Angeles that evening.', strength: 'weak' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Signed recantations from all three witnesses describing single-photo identifications and police pressure.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Ballistics report matching the recovered shell casings to a handgun registered to Anthony Torres, the defendant\'s cousin.', strength: 'strong' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Forensic report finding no DNA, fingerprints, or gunshot residue linking Michael Torres to the scene or a weapon.', strength: 'moderate' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Alibi testimony and time-stamped photos placing Torres across town with his girlfriend at the time of the shooting.', strength: 'moderate' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Detective Raymond Cole', role: 'Lead Homicide Detective', testimony: 'Will testify the original identifications were proper and that the recantations reflect gang intimidation.', weaknesses: 'Used a single-photo show-up; cannot rebut the consistency of three recantations.', aiPersona: 'You are Detective Raymond Cole, the lead investigator. You believe Torres is the shooter and that the witnesses recanted out of fear. You will defend your identification procedures as proper. You are confident but must concede that you showed witnesses a single photo of Torres rather than a full lineup, and that all three later recanted. You attribute the recantations to intimidation.' },
        { id: 'PW2', name: 'Tasha Greene', role: 'Witness (later recanted)', testimony: 'Originally identified Torres; the prosecution will introduce her first statement and argue she now lies out of fear.', weaknesses: 'Now says she never saw the shooter\'s face and was pressured by police.', aiPersona: 'You are Tasha Greene, a neighborhood witness. You initially told detectives Torres did it because they pressured you late at night and showed you only his photo, but the truth is you never saw the shooter\'s face. You are frightened — of the streets and of the police. On the stand you will recant your original identification and explain you were coerced, though you remain visibly anxious.' },
        { id: 'PW3', name: 'Officer Lena Maddox', role: 'Responding Officer', testimony: 'Will testify to the scene, the gang context, and the recovery of shell casings.', weaknesses: 'Has no direct knowledge of who fired the shots; ballistics implicate the cousin.', aiPersona: 'You are Officer Lena Maddox, who responded to the scene. You secured the alley and recovered four shell casings. You will describe the scene and the apparent gang context factually. You have no personal knowledge of the shooter\'s identity and will acknowledge the casings were later matched to a gun registered to Anthony Torres.' }
      ],
      defense: [
        { id: 'DW1', name: 'Marcus Bell', role: 'Firearms / Ballistics Expert', testimony: 'Will testify the shell casings match a handgun registered to Anthony Torres and that nothing ties the defendant to any weapon.', weaknesses: 'Registration does not prove who fired the gun; the cousin denies involvement.', aiPersona: 'You are Marcus Bell, a firearms and ballistics expert for the defense. You will testify the four casings were fired by a handgun registered to Anthony Torres, the defendant\'s cousin, and that no forensic evidence links Michael Torres to any weapon. You are precise and neutral. You will concede that registration alone does not prove who pulled the trigger, but it points away from your client.' },
        { id: 'DW2', name: 'Destiny Ramirez', role: 'Defendant\'s Girlfriend (Alibi)', testimony: 'Will testify Torres was with her across town, supported by time-stamped photos.', weaknesses: 'Romantic relationship invites a bias attack from the prosecution.', aiPersona: 'You are Destiny Ramirez, Michael\'s girlfriend. You will testify Michael was with you at your apartment across town the night Medina was killed, and you have time-stamped photos to back it up. You love Michael and want the truth out. You will acknowledge your relationship but insist you are telling the truth about where he was.' },
        { id: 'DW3', name: 'Michael Torres', role: 'Defendant (if called)', testimony: 'If called: will deny any involvement, assert his alibi, and deny owning or firing the weapon.', weaknesses: 'Alleged gang associations could be used to suggest motive; cross will probe his cousin relationship.', aiPersona: 'You are Michael Torres, the defendant. You did not kill Jorge Medina and you were across town with Destiny. You did not own or fire the gun — it belongs to your cousin Anthony. You are frustrated at being accused on coerced testimony. Speak plainly and steadily. Do not exaggerate; let the holes in the case speak for themselves. Avoid getting baited into discussing gang life.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress the Eyewitness Identifications', basis: 'Due process — impermissibly suggestive single-photo identification procedures.', likelyOutcome: 'contested', argument: 'Detectives showed each witness a single photograph of Torres and pressured them during late-night interviews. These impermissibly suggestive procedures created a substantial likelihood of misidentification and the resulting IDs must be suppressed.' },
        { id: 'M2', title: 'Motion to Admit Third-Party Culpability Evidence', basis: 'Defendant\'s right to present a defense — the ballistics implicate the cousin\'s firearm.', likelyOutcome: 'granted', argument: 'The recovered casings match a gun registered to Anthony Torres. Evidence pointing to a third party as the shooter is directly relevant to reasonable doubt and the defense must be permitted to present it.' },
        { id: 'M3', title: 'Motion to Admit the Witness Recantations', basis: 'Relevance and prior inconsistent statements — the recantations directly impeach the original IDs.', likelyOutcome: 'granted', argument: 'All three witnesses now disavow their identifications and describe coercion. These recantations are admissible as substantive evidence and impeachment, and are essential to a fair evaluation of the only direct evidence against the defendant.' }
      ]
    }
  },
  {
    id: 'case-011',
    title: 'People v. Officer Craig Donovan',
    crimeType: 'SECOND-DEGREE MURDER',
    complexity: 'high',
    favorability: 'balanced',
    jurisdiction: 'Cuyahoga County Court of Common Pleas, Ohio',
    year: 2025,
    judge: 'Hon. Marcus Bell',
    opposingCounsel: { prosecution: 'Assistant Prosecutor Dana Webb', defense: 'Attorney Frank Costa' },
    summary: 'An off-duty police officer fatally shot an unarmed man in a convenience-store lot, shouting that the man was reaching for a weapon; no weapon was found. The defense argues genuine fear compounded by the victim\'s PCP intoxication, while the prosecution points to two prior use-of-force complaints.',
    backstory: `On the evening of January 12, 2025, off-duty Cleveland officer Craig Donovan, 39, shot and killed Darius Bell, 24, in the parking lot of a convenience store. Donovan\'s personal body camera, which he had activated, captured him shouting "He\'s going for a weapon!" moments before firing three rounds. No weapon was ever recovered from Bell or the scene.

Toxicology later revealed Bell had a high concentration of PCP in his system. Witnesses describe Bell as agitated and behaving erratically before the encounter, though accounts diverge sharply on whether he advanced toward Donovan or was simply confused. Some say Bell raised his hands; others say he reached toward his waistband.

Donovan has two prior use-of-force complaints in his personnel file, neither sustained. The prosecution argues this pattern, combined with the absence of any weapon, shows Donovan acted with a depraved disregard for human life and seized on PCP as a post-hoc justification. They charge second-degree murder.

The defense will present a use-of-force expert to explain that PCP can make individuals unpredictable and impervious to pain, and that an officer must make split-second decisions based on perceived threat. Donovan, they argue, genuinely believed Bell was reaching for a gun. The case sits at the fraught intersection of policing, perception, and accountability, and the jury must judge a life-or-death decision made in seconds.`,
    accused: { name: 'Craig Donovan', age: 39, occupation: 'Police officer (Cleveland PD)', background: 'Twelve-year veteran officer with two prior unsustained use-of-force complaints. No criminal record.', priorRecord: 'No criminal record; two prior unsustained internal use-of-force complaints.' },
    victim: { name: 'Darius Bell', age: 24, occupation: 'Unemployed', relationship: 'Stranger' },
    charges: [
      { count: 1, charge: 'Murder (Second Degree)', penal: 'Ohio Rev. Code § 2903.02', maxSentence: '15 years to life' },
      { count: 2, charge: 'Reckless Homicide', penal: 'Ohio Rev. Code § 2903.041', maxSentence: '9-36 months' }
    ],
    prosecutionTheory: 'Craig Donovan shot and killed an unarmed man and then claimed he was reaching for a weapon that never existed. His two prior use-of-force complaints reveal a pattern of aggression, and his use of deadly force against an unarmed, confused man was objectively unreasonable and reckless. PCP does not justify killing a man who posed no actual threat.',
    defenseTheory: 'Craig Donovan made a split-second decision in genuine fear for his life. Darius Bell was intoxicated on PCP, behaving erratically, and appeared to reach for a weapon. Officers are trained that PCP makes individuals unpredictable and dangerous, and the law judges reasonableness from the perspective of an officer in the moment, not with hindsight.',
    prosecutionStrategies: ['Emphasize that no weapon was ever found', 'Introduce the two prior use-of-force complaints as a pattern', 'Use the body-cam timing to argue Donovan fired too quickly', 'Present a use-of-force expert who finds the shooting unreasonable'],
    defenseStrategies: ['Establish Bell\'s PCP intoxication and erratic behavior', 'Use a use-of-force expert on split-second threat perception', 'Argue the body cam shows a furtive waistband movement', 'Frame the prior complaints as unsustained and inadmissible'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Body-camera footage capturing Donovan shouting "He\'s going for a weapon!" and firing three rounds within seconds.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Crime-scene inventory confirming no weapon was found on Bell or anywhere in the lot.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Donovan\'s personnel file documenting two prior use-of-force complaints.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Eyewitness testimony that Bell had raised his hands before the shots were fired.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Toxicology report showing a high concentration of PCP in Bell\'s system at the time of death.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Use-of-force expert report explaining that PCP intoxication can cause unpredictable, aggressive, pain-resistant behavior.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Enhanced body-cam stills the defense argues show Bell reaching toward his waistband.', strength: 'weak' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Donovan\'s training records documenting instruction on the dangers of PCP-intoxicated subjects.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Dr. Renee Coltrane', role: 'County Medical Examiner', testimony: 'Will testify Bell was shot three times, including once in the back, suggesting he was turning away.', weaknesses: 'Cannot establish what Bell\'s hands were doing; PCP toxicology supports the defense narrative.', aiPersona: 'You are Dr. Renee Coltrane, the county medical examiner. You will testify Bell sustained three gunshot wounds, one of which entered from behind, suggesting movement away from the officer. You are clinical and exact. You will acknowledge Bell had PCP in his system and that you cannot determine from the autopsy what his hands were doing at the moment he was shot.' },
        { id: 'PW2', name: 'Andre Whitfield', role: 'Eyewitness', testimony: 'Will testify Bell had his hands up and was not reaching for anything when Donovan fired.', weaknesses: 'Viewed the scene at night, partly obstructed; defense will probe his vantage point.', aiPersona: 'You are Andre Whitfield, a bystander who witnessed the shooting from across the lot. You will testify Bell had his hands raised and was not reaching for a weapon. You are sincere but it was dark and your view was partly blocked by a car. You will hold to what you saw while honestly acknowledging the limits of your vantage point.' },
        { id: 'PW3', name: 'Sergeant Olivia Park', role: 'Internal Affairs Investigator', testimony: 'Will testify to Donovan\'s two prior use-of-force complaints and the department\'s findings.', weaknesses: 'Both prior complaints were unsustained; admissibility is contested.', aiPersona: 'You are Sergeant Olivia Park of Internal Affairs. You investigated Donovan\'s background and will testify about his two prior use-of-force complaints. You are by-the-book and neutral. You must acknowledge that neither prior complaint was sustained and that they did not result in discipline, while explaining the nature of each.' }
      ],
      defense: [
        { id: 'DW1', name: 'Capt. (Ret.) Gerald Hsu', role: 'Use-of-Force Expert', testimony: 'Will testify that Donovan\'s response was within training given a perceived reach and PCP intoxication.', weaknesses: 'Must reconcile his opinion with the fact that no weapon existed and a shot struck Bell\'s back.', aiPersona: 'You are retired Captain Gerald Hsu, a use-of-force expert for the defense. You will testify that officers are trained to respond to perceived threats in fractions of a second, that PCP makes subjects dangerously unpredictable, and that a furtive waistband movement can justify deadly force. You are authoritative. You must address the absence of a weapon and the back wound, explaining that reasonableness is judged from the officer\'s perspective in the moment, not in hindsight.' },
        { id: 'DW2', name: 'Craig Donovan', role: 'Defendant (if called)', testimony: 'If called: will testify he genuinely believed Bell was drawing a weapon and feared for his life.', weaknesses: 'The absence of any weapon and the prior complaints make his credibility the central battleground.', aiPersona: 'You are Craig Donovan, the defendant, a veteran officer. You will testify that Bell was agitated, ignored your commands, and reached toward his waistband, and that you genuinely believed he was drawing a gun. You feared for your life. You are remorseful that Bell died but maintain your decision was reasonable in the moment. Do not appear callous. Acknowledge the tragedy while standing by your perception of the threat.' }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude Prior Use-of-Force Complaints', basis: 'Ohio Rule of Evidence 404(b) — improper character/propensity evidence.', likelyOutcome: 'contested', argument: 'The two prior unsustained complaints are classic propensity evidence offered to paint Donovan as a violent officer. Under Rule 404(b) they are inadmissible to prove he acted in conformity, and their prejudice far outweighs any probative value.' },
        { id: 'M2', title: 'Motion to Admit the Victim\'s PCP Toxicology', basis: 'Relevance — the victim\'s intoxication bears on his behavior and the reasonableness of the officer\'s perception.', likelyOutcome: 'granted', argument: 'Bell\'s PCP intoxication is directly relevant to his erratic conduct and to whether Donovan\'s perception of a threat was reasonable. The toxicology must be admitted for the jury to fairly assess the encounter.' },
        { id: 'M3', title: 'Motion to Admit Donovan\'s Training Records', basis: 'Relevance — training on PCP-intoxicated subjects informs the reasonableness analysis.', likelyOutcome: 'granted', argument: 'Donovan\'s training on the dangers of PCP-intoxicated individuals is relevant to what a reasonable officer in his position would perceive and do. The records should be admitted to provide the jury full context for his decision.' }
      ]
    }
  },
  {
    id: 'case-012',
    title: 'People v. Patricia Larson',
    crimeType: 'MURDER (FILICIDE)',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'Maricopa County, Arizona',
    year: 2024,
    judge: 'Hon. Robert Aldana',
    opposingCounsel: { prosecution: 'Deputy County Attorney Helen Voss', defense: 'Attorney Gregory Lindt' },
    summary: 'A mother is charged with the drowning deaths of her three young children and tells police that "God told me to release them." The defense asserts she was legally insane from severe postpartum psychosis; the prosecution argues her planning shows she knew her acts were wrong.',
    backstory: `On the morning of February 9, 2024, Patricia Larson, 31, called 911 from her home in Mesa, Arizona, more than two hours after the deaths of her three children — ages 2, 4, and 6. When officers arrived she was calm and told them, "God told me to release them. They are safe now." The medical examiner concluded all three had drowned in the family bathtub.

Eight months earlier, after the birth of her third child, Larson had been hospitalized for nine days with a diagnosis of severe postpartum psychosis. She was discharged on antipsychotic medication. Pharmacy records show she had not refilled the prescription in the six weeks before the deaths.

The prosecution points to two facts it says prove she understood the wrongfulness of her conduct: in the weeks before, she searched online for "how do I get my husband to take the kids for the weekend," and after the deaths she covered each child with a towel — conduct the State argues reflects guilt and concealment.

The defense contends Larson was in the grip of a delusional command psychosis and could not understand the nature or wrongfulness of her acts. Her husband, who was traveling for work, has stood by her. This is among the most wrenching cases on the docket, and it turns entirely on Arizona's insanity standard.`,
    accused: { name: 'Patricia Larson', age: 31, occupation: 'Homemaker (former dental hygienist)', background: 'No criminal history. Documented severe postpartum psychosis with a prior nine-day inpatient stay.', priorRecord: 'None.' },
    victim: { name: 'The Larson children (ages 2, 4, and 6)', age: '2, 4, 6', occupation: 'Children', relationship: 'Defendant’s children' },
    charges: [
      { count: 1, charge: 'First-Degree Murder (Count I)', penal: 'A.R.S. § 13-1105', maxSentence: 'Natural life / death-eligible' },
      { count: 2, charge: 'First-Degree Murder (Count II)', penal: 'A.R.S. § 13-1105', maxSentence: 'Natural life / death-eligible' },
      { count: 3, charge: 'First-Degree Murder (Count III)', penal: 'A.R.S. § 13-1105', maxSentence: 'Natural life / death-eligible' }
    ],
    prosecutionTheory: 'Patricia Larson knew exactly what she was doing. She researched how to be alone with the children, she carried out the killings methodically, and she covered the bodies — behavior reflecting awareness that her conduct was wrong. Arizona law requires more than mental illness; it requires that she did not know her acts were wrong. She did.',
    defenseTheory: 'Patricia Larson was floridly psychotic. Untreated postpartum psychosis produced a delusional belief that she was saving her children by sending them to God. Under that delusion she could not understand that what she did was wrong in the eyes of the law or society. She is not guilty by reason of insanity and belongs in a secure psychiatric facility, not a prison.',
    prosecutionStrategies: ['Emphasize the planning evidence — the search for time alone with the children', 'Argue that covering the bodies shows consciousness of wrongdoing', 'Stress that Arizona’s insanity test is narrow: mental illness alone is not a defense'],
    defenseStrategies: ['Center the documented prior psychotic break and the lapsed medication', 'Use a forensic psychiatrist to explain command delusions and altruistic filicide', 'Reframe the "concealment" as ritual care consistent with the delusion, not guilt'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Recording and transcript of the 911 call and the defendant’s statement to officers: "God told me to release them."', strength: 'moderate' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Browser history showing searches in the weeks prior, including "how do I get my husband to take the kids for the weekend."', strength: 'moderate' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Crime-scene documentation noting each child had been covered with a towel after death.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Medical examiner’s report concluding the cause of death for all three children was drowning.', strength: 'strong' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Pharmacy records showing the defendant did not refill her antipsychotic medication for six weeks before the deaths.', strength: 'weak' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Inpatient psychiatric records from eight months prior documenting a nine-day admission for severe postpartum psychosis.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Report of defense forensic psychiatrist Dr. Naomi Okafor diagnosing an active psychotic episode with command delusions at the time of the offense.', strength: 'strong' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Text messages to her sister in the days prior describing fears that the children were "in danger from something only she could see."', strength: 'moderate' },
        { id: 'D4', label: 'Exhibit D-4', description: 'Testimony of the defendant’s husband describing her deterioration and his unanswered calls to her psychiatrist.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Detective Alan Briggs', role: 'Lead Homicide Detective, Mesa PD', testimony: 'Will testify to the defendant’s calm demeanor, her statements at the scene, the covered bodies, and the timeline showing a two-hour delay before the 911 call.', weaknesses: 'Calm demeanor is equally consistent with psychotic detachment; he is not a mental-health expert.', aiPersona: "You are Detective Alan Briggs of the Mesa Police Department. You responded to the Larson home. Patricia Larson was eerily calm and said God had told her to release the children. Each child had been covered with a towel. There was a two-hour gap before she called 911. You describe what you observed factually; you are not a psychiatrist and you concede you cannot speak to her mental state, only her behavior." },
        { id: 'PW2', name: 'Dr. Evelyn Cho', role: 'Maricopa County Medical Examiner', testimony: 'Establishes the cause and manner of death for all three children as drowning and homicide.', weaknesses: 'Cannot speak to the defendant’s mental state or intent.', aiPersona: "You are Dr. Evelyn Cho, the Maricopa County Medical Examiner. You performed the examinations. The cause of death for all three children was drowning; the manner was homicide. You are precise and clinical and you confine your testimony to your medical findings. You do not opine on the defendant's mental state." },
        { id: 'PW3', name: 'Dr. Martin Hale', role: 'State Forensic Psychiatrist', testimony: 'Will testify that the planning and concealment indicate the defendant knew her conduct was wrong, defeating the insanity defense under Arizona law.', weaknesses: 'Conducted a single evaluation months after the event; defense will argue retrospective psychosis is hard to assess after stabilization.', aiPersona: "You are Dr. Martin Hale, a forensic psychiatrist retained by the State. You evaluated Patricia Larson. You acknowledge she has a serious mental illness, but in your opinion the evidence of planning and the covering of the bodies show she understood her acts were wrong. Under Arizona's narrow standard, mental illness alone is not insanity. You are measured and concede the difficulty of retrospective assessment when pressed." }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Naomi Okafor', role: 'Forensic Psychiatrist (Defense Expert)', testimony: 'Will testify that the defendant suffered an active psychotic episode with command delusions and could not understand that her acts were wrong.', weaknesses: 'Did not treat the defendant at the time; relies partly on the defendant’s own account.', aiPersona: "You are Dr. Naomi Okafor, a forensic psychiatrist for the defense. You reviewed Patricia Larson's prior hospitalization, the lapse in medication, and her presentation. In your opinion she was in an active psychotic episode driven by command delusions and altruistic beliefs — she believed she was saving her children. Under that delusion she could not appreciate the wrongfulness of her acts. You explain postpartum psychosis carefully and acknowledge you did not treat her at the time." },
        { id: 'DW2', name: 'Daniel Larson', role: 'Defendant’s Husband', testimony: 'Will describe the defendant’s deterioration, her delusional statements, and his attempts to reach her psychiatrist.', weaknesses: 'A grieving, biased witness; was away during the critical period.', aiPersona: "You are Daniel Larson, Patricia's husband and the father of the children. You are devastated but you do not believe your wife was evil — you believe she was profoundly ill. You describe how she changed after the third birth, the things she said about unseen dangers, and your failed efforts to get the psychiatrist to call back while you were traveling for work. You are heartbroken and you ask the jury to understand she was sick." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion for a Competency Hearing Before Trial', basis: 'Due process — a defendant must be competent to stand trial (Rule 11, Ariz. R. Crim. P.).', likelyOutcome: 'granted', argument: 'There is a reasonable basis to question the defendant’s present competency given her documented psychotic disorder. Due process forbids trying a defendant who cannot understand the proceedings or assist counsel; a Rule 11 evaluation must precede trial.' },
        { id: 'M2', title: 'Motion to Exclude the Browser-History Searches', basis: 'Arizona Rule of Evidence 403 — unfair prejudice substantially outweighing probative value.', likelyOutcome: 'contested', argument: 'The searches are ambiguous and ordinary on their face, yet the State will invite the jury to read sinister planning into them. Their slight probative value is substantially outweighed by the danger of unfair prejudice and should be excluded under Rule 403.' },
        { id: 'M3', title: 'Motion to Admit the Full Psychiatric History', basis: 'Relevance — the defendant’s mental state is the central issue under the insanity defense.', likelyOutcome: 'granted', argument: 'Where insanity is asserted, the defendant’s complete psychiatric history is directly relevant to her mental state at the time of the offense. The records of her prior psychotic break and treatment must be admitted for the jury to evaluate the defense.' }
      ]
    }
  },
  {
    id: 'case-013',
    title: 'People v. Evelyn Hargrove',
    crimeType: 'SOLICITATION OF MURDER',
    complexity: 'medium',
    favorability: 'balanced',
    jurisdiction: 'King County, Washington',
    year: 2024,
    judge: 'Hon. Dana Whitfield',
    opposingCounsel: { prosecution: 'Senior Deputy Prosecuting Attorney Marcus Reedy', defense: 'Attorney Tom Vasquez' },
    summary: 'A 63-year-old grandmother paid an undercover officer she believed was a hitman $3,000 to kill her daughter’s abusive husband. The defense argues entrapment; the prosecution points to the recorded transaction and the cash.',
    backstory: `For three years, Evelyn Hargrove, 63, watched her son-in-law Kevin Marsh terrorize her daughter. There were two restraining orders, a hospital visit, and a child caught in the middle. When the latest order was violated and no arrest followed, a man Hargrove met through an acquaintance offered to "make the problem go away."

That man was an undercover detective with the King County Sheriff’s Office, brought in after a tip. Over roughly three weeks, the detective met with Hargrove several times. According to the recordings, Hargrove repeatedly hesitated and twice said she "couldn’t go through with it." On the fourth meeting she handed him an envelope containing $3,000 in cash and a photograph of Marsh.

The prosecution charges solicitation to commit first-degree murder, relying on the audio and video recordings and the payment. The defense contends Hargrove was a desperate, grieving mother who never would have initiated such a plan and was steadily worn down by a professional. The case turns on entrapment: whether the government implanted the criminal design in an otherwise unwilling person.

Hargrove has no record, raised three children alone, and volunteers at her church. The jury must decide whether she is a would-be murderer or a victim of overreach.`,
    accused: { name: 'Evelyn Hargrove', age: 63, occupation: 'Retired bookkeeper', background: 'No criminal history; primary caregiver for an abused daughter and grandchild.', priorRecord: 'None.' },
    victim: { name: 'Kevin Marsh (intended target; unharmed)', age: 38, occupation: 'Contractor', relationship: 'Defendant’s son-in-law' },
    charges: [
      { count: 1, charge: 'Criminal Solicitation to Commit Murder in the First Degree', penal: 'RCW 9A.28.030 / 9A.32.030', maxSentence: '10 years to life' }
    ],
    prosecutionTheory: 'Whatever her sympathies, Evelyn Hargrove agreed to have a man killed and paid $3,000 to do it. She had ample time to walk away and did not. The recordings capture a knowing, voluntary agreement to commit murder for hire — solicitation, complete the moment she handed over the money.',
    defenseTheory: 'Evelyn Hargrove had no predisposition to murder anyone. A trained undercover officer identified a grieving, frightened woman and, over weeks of persistent contact, manufactured a crime that would never have existed but for the government’s inducement. She twice refused. This is textbook entrapment.',
    prosecutionStrategies: ['Play the moment of payment — the handing over of cash and the photograph', 'Argue predisposition: she pursued the meetings and provided the target’s details', 'Stress that sympathy for the motive does not excuse soliciting a killing'],
    defenseStrategies: ['Foreground the recorded refusals and hesitation', 'Show the officer initiated and escalated each contact', 'Humanize Hargrove and the abuse that drove her to a breaking point'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Audio and video recordings of all four meetings between the defendant and the undercover detective.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'The envelope containing $3,000 in cash and a photograph of Kevin Marsh, recovered at the final meeting.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'The detective’s contemporaneous reports documenting the defendant’s statements and the handoff of payment.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'A note in the defendant’s handwriting listing Marsh’s work schedule and address.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Transcript excerpts showing the defendant twice stating she "couldn’t go through with it" before the final meeting.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Records of two restraining orders and a hospital visit documenting Marsh’s abuse of the defendant’s daughter.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Contact log showing the undercover detective initiated each of the four meetings.', strength: 'moderate' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Detective Ray Coleman', role: 'Undercover Detective, King County Sheriff’s Office', testimony: 'Will testify to the meetings, the defendant’s statements, and the exchange of cash and the photograph.', weaknesses: 'He initiated and escalated the contacts; the recordings capture her refusals.', aiPersona: "You are Detective Ray Coleman of the King County Sheriff's Office. You posed as a hitman after a tip. You met Evelyn Hargrove four times. You maintain you only gave her opportunities and never pressured her, though you concede you initiated the meetings and that she expressed reluctance. You testify she ultimately handed over $3,000 and a photo of Marsh. You are professional and careful not to overstate her enthusiasm." },
        { id: 'PW2', name: 'Lieutenant Sandra Pike', role: 'Supervising Officer, Major Crimes', testimony: 'Establishes the basis for the operation, the chain of custody for the cash, and the recording procedures.', weaknesses: 'Relied on the tip and the undercover’s judgment; no independent evidence Hargrove sought a hitman first.', aiPersona: "You are Lieutenant Sandra Pike, who supervised the operation. You authorized the undercover contact based on a tip and confirm the recordings and the handling of the recovered cash. You defend the operation as standard practice. On cross you acknowledge there was no evidence Hargrove had approached anyone else and that the tip came from an acquaintance, not from Hargrove seeking a killer." }
      ],
      defense: [
        { id: 'DW1', name: 'Karen Marsh', role: 'Defendant’s Daughter', testimony: 'Will describe years of abuse and her mother’s desperation when the legal system failed to protect her.', weaknesses: 'Deeply sympathetic but biased; does not address the elements of solicitation.', aiPersona: "You are Karen Marsh, Evelyn's daughter and Kevin's wife. You suffered years of abuse from Kevin — restraining orders, a hospital visit, terror. You describe how the system repeatedly failed you and how it broke your mother to watch. You believe your mother was driven to desperation, not malice. You are emotional and protective of her." },
        { id: 'DW2', name: 'Evelyn Hargrove', role: 'Defendant (if called)', testimony: 'Will testify she never sought a hitman, was approached and pressured, and twice tried to back out before being worn down.', weaknesses: 'She did hand over money and a photograph; the prosecution will press why she did not simply walk away.', aiPersona: "You are Evelyn Hargrove, the defendant. You are a 63-year-old grandmother. You never went looking for a killer — the man approached you through an acquaintance and kept coming back. Twice you told him you couldn't do it. You were exhausted, terrified for your daughter, and worn down. You admit you handed over the money in a moment of despair and you are ashamed of it, but it was never who you are. You are gentle, remorseful, and frightened." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Dismiss for Entrapment as a Matter of Law', basis: 'Due process / Washington entrapment statute (RCW 9A.16.070).', likelyOutcome: 'contested', argument: 'The undisputed recordings show law enforcement originated the plan, initiated every contact, and persisted after repeated refusals. Where the criminal design originates with the State and is implanted in an unwilling person, entrapment is established and the charge must be dismissed.' },
        { id: 'M2', title: 'Motion to Admit Evidence of the Victim’s Abuse History', basis: 'Relevance — bears on the defendant’s state of mind and lack of predisposition.', likelyOutcome: 'granted', argument: 'The documented abuse explains the defendant’s state of mind and supports the absence of any predisposition to murder. It is directly relevant to the contested entrapment defense and should be admitted.' },
        { id: 'M3', title: 'Motion to Exclude the Defendant’s Pre-Miranda Statements', basis: 'Fifth Amendment — custodial statements taken before warnings.', likelyOutcome: 'denied', argument: 'Statements the defendant made at the final meeting were elicited in a coercive, government-controlled setting and should be suppressed absent proper advisement of her rights.' }
      ]
    }
  },
  {
    id: 'case-014',
    title: 'People v. James Thornton',
    crimeType: 'ARSON (4 DEATHS)',
    complexity: 'medium',
    favorability: 'prosecution',
    jurisdiction: 'Suffolk County, Massachusetts',
    year: 2024,
    judge: 'Hon. Carol Pierce',
    opposingCounsel: { prosecution: 'ADA Frank Russo', defense: 'Attorney Lena Park' },
    summary: 'A failing-restaurant owner is accused of setting the fire that killed four volunteer firefighters when the building collapsed. He says he was there only to check a burst pipe and left before any fire began.',
    backstory: `At 2:47 a.m. on January 18, 2024, fire tore through Thornton’s Grille in South Boston. Investigators found accelerant at three separate points of origin — a hallmark of arson. When the roof unexpectedly collapsed, four volunteer firefighters were killed.

James Thornton, 49, owned the restaurant, which carried roughly $400,000 in debt. A $2.1 million fire insurance policy covered the building; the claim was filed nine days after the blaze. Security footage from an adjacent business shows Thornton’s car leaving the restaurant’s lot at 2:31 a.m. — sixteen minutes before the fire was reported.

Thornton says his manager called him about a burst pipe, that he drove over to check it, found nothing urgent, and left. He denies setting any fire and points to the building’s old wiring. No accelerant was found on his clothing or in his vehicle.

The prosecution argues the three points of origin, the timing, the debt, and the insurance claim together prove a calculated arson with fatal consequences. The defense argues the State has only circumstance and coincidence, and that the manager’s documented call places Thornton at the scene innocently.`,
    accused: { name: 'James Thornton', age: 49, occupation: 'Restaurant owner', background: 'No prior record. Business heavily indebted; recently denied a bank loan.', priorRecord: 'None.' },
    victim: { name: 'Four volunteer firefighters', age: 'Various', occupation: 'Volunteer firefighters', relationship: 'First responders' },
    charges: [
      { count: 1, charge: 'Arson of a Building', penal: 'M.G.L. c. 266, § 2', maxSentence: 'Up to 20 years' },
      { count: 2, charge: 'Manslaughter (Four Counts, by Arson)', penal: 'M.G.L. c. 265, § 13', maxSentence: 'Up to 20 years each' }
    ],
    prosecutionTheory: 'James Thornton was drowning in debt and worth more to himself burned than open. He poured accelerant at three points, set the fire, and fled minutes before it was reported. Four firefighters died answering the call. The motive, the timing, the multiple origins, and the swift insurance claim tell a single story: arson for money that became a quadruple homicide.',
    defenseTheory: 'There is no physical evidence tying James Thornton to any fire — no accelerant on his clothes, in his car, or anywhere connected to him. He went to the restaurant because his manager called about a burst pipe, a call that is documented. The building had failing wiring. The State has stacked coincidence on coincidence and asks the jury to call it proof.',
    prosecutionStrategies: ['Establish the three separate points of origin as conclusive of arson', 'Tie motive to the $400,000 debt and the $2.1M policy', 'Use the security footage timeline placing him there minutes before the fire'],
    defenseStrategies: ['Emphasize the absence of accelerant on Thornton or his vehicle', 'Corroborate the manager’s burst-pipe call', 'Attack the origin analysis and raise the documented electrical problems'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Fire-investigation report identifying accelerant (gasoline) at three separate points of origin.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Security footage from an adjacent business showing the defendant’s car leaving the lot at 2:31 a.m.', strength: 'moderate' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Financial records showing roughly $400,000 in business debt and a recently denied loan application.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'The $2.1 million insurance claim filed nine days after the fire.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Medical examiner reports establishing the four firefighters died of injuries sustained in the roof collapse.', strength: 'strong' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Phone records confirming a call from the restaurant manager to the defendant about a burst pipe at 2:18 a.m.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Independent electrical engineer’s report documenting outdated, code-deficient wiring in the building.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Forensic results finding no accelerant on the defendant’s clothing or in his vehicle.', strength: 'strong' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Captain Maria Ellis', role: 'State Fire Marshal’s Office Investigator', testimony: 'Will testify that the three independent points of origin and accelerant residue conclusively establish arson.', weaknesses: 'Cannot place the accelerant in Thornton’s hands; defense will probe the electrical issues.', aiPersona: "You are Captain Maria Ellis, an investigator with the State Fire Marshal's Office. You determined the fire was intentionally set: there were three separate points of origin and gasoline residue at each, which does not occur accidentally. You are confident the fire was arson. On cross you concede you cannot say who set it, and you address but do not retreat from questions about the building's old wiring." },
        { id: 'PW2', name: 'Gerald Voss', role: 'Insurance Fraud Investigator', testimony: 'Establishes the debt, the policy, and the timing of the claim, and opines the financial profile fits a for-profit arson.', weaknesses: 'Filing an insurance claim after a fire is ordinary; he offers motive, not proof of the act.', aiPersona: "You are Gerald Voss, an insurance fraud investigator. You reviewed Thornton's finances: about $400,000 in debt, a denied loan, and a $2.1 million policy with a claim filed nine days after the fire. You testify this pattern is consistent with for-profit arson. On cross you acknowledge that filing a claim is normal and that you are describing motive, not proof that Thornton lit the fire." },
        { id: 'PW3', name: 'Chief Daniel Brooks', role: 'Fire Chief', testimony: 'Will describe the response, the unexpected roof collapse, and the deaths of the four firefighters.', weaknesses: 'Emotional impact testimony; does not bear on who set the fire.', aiPersona: "You are Chief Daniel Brooks. You led the response to the fire. You describe the conditions your crews faced and the sudden roof collapse that killed four of your firefighters. You are somber and factual. You cannot speak to the cause or who set the fire — only to what your people walked into and the loss your department suffered." }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Howard Lin', role: 'Electrical Engineer (Defense Expert)', testimony: 'Will testify the building’s wiring was dangerously outdated and could have contributed to or caused a fire.', weaknesses: 'Does not explain accelerant at three separate origins.', aiPersona: "You are Dr. Howard Lin, a forensic electrical engineer for the defense. You inspected the building's wiring records and remnants. The system was decades out of code with overloaded circuits. You testify that such wiring poses a real fire risk. On cross you must concede that electrical faults do not explain gasoline at three separate points of origin, and you carefully limit your opinion to the electrical hazards." },
        { id: 'DW2', name: 'Sofia Reyes', role: 'Restaurant Manager', testimony: 'Will confirm she called Thornton about a burst pipe shortly before the fire.', weaknesses: 'Loyal employee; the call does not exclude Thornton from setting the fire while there.', aiPersona: "You are Sofia Reyes, the restaurant's manager. You discovered a burst pipe late that night and called James Thornton at 2:18 a.m. to tell him. You confirm the call and that he said he would come check it. You believe he is a decent man. On cross you concede you were not at the restaurant and cannot say what he did once he arrived." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude the Insurance Claim', basis: 'Massachusetts Rule of Evidence 403 — unfair prejudice outweighing probative value.', likelyOutcome: 'denied', argument: 'Filing an insurance claim after a fire is wholly ordinary conduct. Admitting it invites the jury to treat a lawful act as evidence of guilt, and its prejudicial effect substantially outweighs any probative value under Rule 403.' },
        { id: 'M2', title: 'Motion to Challenge the Accelerant Analysis (Daubert/Lanigan)', basis: 'Reliability of expert methodology (Commonwealth v. Lanigan).', likelyOutcome: 'denied', argument: 'The defense seeks a reliability hearing on the State’s origin-and-cause methodology. The conclusions rest on contested pattern interpretation, and the court should ensure the methodology satisfies the Lanigan standard before it reaches the jury.' },
        { id: 'M3', title: 'Motion to Admit the Building’s Code-Violation History', basis: 'Relevance — third-party / accidental causation.', likelyOutcome: 'granted', argument: 'The building’s documented electrical code violations are directly relevant to an alternative, accidental cause of the fire. The defense is entitled to present this evidence to rebut the inference of arson.' }
      ]
    }
  },
  {
    id: 'case-015',
    title: 'United States v. Alejandro Fuentes',
    crimeType: 'RICO (CARTEL ENTERPRISE)',
    complexity: 'extreme',
    favorability: 'prosecution',
    jurisdiction: 'U.S. District Court, W.D. Texas',
    year: 2025,
    judge: 'Hon. Miguel Santos',
    opposingCounsel: { prosecution: 'AUSA Diane Crowley', defense: 'Attorney Robert Salinas' },
    summary: 'The reputed head of the Fuentes drug-trafficking organization faces a sprawling RICO indictment encompassing murder, $200 million in narcotics, human trafficking, and the bribery of federal officials. The defense attacks the credibility of cooperating witnesses and the legality of a decade of wiretaps.',
    backstory: `For more than a decade, federal investigators say, the Fuentes organization moved hundreds of millions of dollars in narcotics across the southern border, enforced its territory with violence, trafficked human beings, and corrupted officials sworn to stop it. At the center, the government alleges, sits Alejandro Fuentes, 51.

The case is built on ten years of court-authorized wiretaps, three cooperating insiders, and a forensic accounting of the enterprise’s finances. Twelve murders are attributed to the organization; four federal officials are alleged to have taken bribes. It is the most complex matter on the docket, charged under the Racketeer Influenced and Corrupt Organizations Act and related statutes.

Fuentes presents himself as a legitimate import-export businessman framed by rivals and by cooperators desperate to shave decades off their own sentences. His lawyers contend that the wiretap authorizations were obtained on stale or false affidavits, that the cooperators are serial liars trading testimony for freedom, and that the government has conflated a lawful business with a criminal enterprise.

To convict on the RICO counts, the jury must find an enterprise, a pattern of racketeering activity, and the defendant’s knowing participation. The defense intends to contest each element.`,
    accused: { name: 'Alejandro Fuentes', age: 51, occupation: 'Import-export businessman (alleged cartel leader)', background: 'Wealthy; extensive legitimate holdings alongside alleged criminal enterprise. Prior arrests, no U.S. convictions.', priorRecord: 'Foreign arrests; no prior U.S. conviction.' },
    victim: { name: 'Multiple — twelve attributed homicide victims, trafficking victims, and defrauded institutions', age: 'Various', occupation: 'Various', relationship: 'None — enterprise harm' },
    charges: [
      { count: 1, charge: 'RICO Conspiracy', penal: '18 U.S.C. § 1962(d)', maxSentence: 'Life imprisonment' },
      { count: 2, charge: 'Continuing Criminal Enterprise', penal: '21 U.S.C. § 848', maxSentence: '20 years to life' },
      { count: 3, charge: 'Murder in Aid of Racketeering', penal: '18 U.S.C. § 1959', maxSentence: 'Life / death-eligible' },
      { count: 4, charge: 'Bribery of Public Officials', penal: '18 U.S.C. § 201', maxSentence: '15 years' }
    ],
    prosecutionTheory: 'Alejandro Fuentes built and ran a criminal enterprise that flooded American communities with narcotics, killed those who threatened it, trafficked human beings, and bought the loyalty of federal officials. A decade of wiretaps, insider testimony, and the money trail all converge on one man at the top. He is the enterprise.',
    defenseTheory: 'The government’s case is a tower built on the word of admitted criminals bargaining for their freedom and on wiretaps obtained through stale and misleading affidavits. Strip away the cooperators and the unlawful surveillance and what remains is a successful businessman, not a kingpin. The pattern the prosecution sees is the product of incentive and assumption.',
    prosecutionStrategies: ['Use the wiretaps to put the defendant’s own words before the jury', 'Corroborate cooperators against each other and against the financial records', 'Frame the RICO enterprise through the structure, hierarchy, and division of labor', 'Tie the bribery counts to traceable payments to officials'],
    defenseStrategies: ['Attack each cooperator’s motive to lie under their plea deals', 'Mount a Franks challenge to the wiretap affidavits', 'Sever or compartmentalize counts to break the enterprise narrative', 'Recast the finances as legitimate import-export activity'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Catalog of court-authorized wiretap intercepts spanning ten years, including calls attributed to the defendant directing operations.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Forensic accounting tracing roughly $200 million through shell companies and back to entities the defendant controls.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Cooperator testimony from three former insiders describing the enterprise’s structure, murders, and bribes.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Bank and wire records reflecting payments to four federal officials.', strength: 'strong' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Seized ledgers and narcotics quantities recovered in coordinated raids.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'The cooperators’ plea agreements showing sentence reductions of decades in exchange for testimony.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'The wiretap affidavits, which the defense contends relied on stale information and misstatements.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Records of the defendant’s legitimate import-export businesses offered to explain the financial flows.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Special Agent Laura Vega', role: 'FBI Case Agent', testimony: 'Will walk the jury through the wiretaps, the enterprise structure, and how the evidence connects to the defendant.', weaknesses: 'Interpretation-heavy testimony; defense will challenge the attribution of coded calls to Fuentes.', aiPersona: "You are FBI Special Agent Laura Vega, the lead case agent. You spent years building this case: wiretaps, financial tracing, and coordination with cooperators. You explain how the intercepted calls and money flows tie back to Alejandro Fuentes as the head of the enterprise. You are confident and methodical, and on cross you defend your attribution of coded language while acknowledging it requires interpretation." },
        { id: 'PW2', name: 'Hector Salas', role: 'Cooperating Witness (former lieutenant)', testimony: 'Will testify to the enterprise’s hierarchy, specific murders, and the bribery scheme, from the inside.', weaknesses: 'Facing life; received a major sentence reduction; obvious incentive to please the government.', aiPersona: "You are Hector Salas, a former lieutenant in the Fuentes organization, now cooperating. You testify about the hierarchy, who ordered which killings, and how officials were paid. You are blunt about your own crimes. On cross you must admit you faced life in prison and that your deal slashed your sentence in exchange for testimony — but you insist what you are saying is true." },
        { id: 'PW3', name: 'Karen Wadsworth', role: 'Forensic Accountant', testimony: 'Establishes the money trail linking roughly $200 million to entities the defendant controls.', weaknesses: 'Can show flows but not always the defendant’s personal knowledge of each transaction.', aiPersona: "You are Karen Wadsworth, a forensic accountant for the government. You traced the enterprise's money through shell companies back to entities Fuentes controls. You explain the structure clearly for the jury. On cross you concede that tracing funds to controlled entities does not always prove the defendant personally directed each transfer, but you stand by the overall pattern." }
      ],
      defense: [
        { id: 'DW1', name: 'Professor Alan Reyes', role: 'Wiretap / Surveillance Expert (Defense)', testimony: 'Will testify the affidavits relied on stale information and that the coded-call attributions are speculative.', weaknesses: 'Did not conduct the investigation; offers critique, not an alternative explanation for the money.', aiPersona: "You are Professor Alan Reyes, an expert on electronic surveillance retained by the defense. You reviewed the wiretap affidavits and intercepts. You testify that portions of the affidavits relied on stale information and that attributing coded calls to a specific speaker is interpretive and uncertain. On cross you concede you did not investigate the case and cannot account for the financial evidence." },
        { id: 'DW2', name: 'Maria Fuentes', role: 'Defendant’s Sister / Business Partner', testimony: 'Will testify the import-export business is legitimate and explains the financial activity innocently.', weaknesses: 'Biased family member; cannot rebut the wiretaps or the cooperators’ accounts of violence.', aiPersona: "You are Maria Fuentes, Alejandro's sister and a partner in the family import-export business. You testify the business is legitimate and that the money the government calls criminal is ordinary trade. You love your brother and believe he is being framed by rivals and liars. On cross you cannot explain the intercepted calls or the cooperators' accounts, and you concede you were not involved in every part of his life." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion for a Franks Hearing on the Wiretap Affidavits', basis: 'Fourth Amendment (Franks v. Delaware) — false or reckless statements in the supporting affidavits.', likelyOutcome: 'contested', argument: 'The defense makes a substantial preliminary showing that the wiretap affidavits contained material misstatements and omissions made knowingly or with reckless disregard for the truth. A Franks hearing is required, and if the falsehoods are set aside, probable cause collapses and the intercepts must be suppressed.' },
        { id: 'M2', title: 'Motion to Sever the Murder Counts from the Financial Counts', basis: 'Federal Rule of Criminal Procedure 14 — prejudicial joinder.', likelyOutcome: 'denied', argument: 'Trying the violent murder-in-aid-of-racketeering counts alongside the financial counts will inflame the jury and bleed prejudice across distinct charges. Severance under Rule 14 is necessary to protect the defendant’s right to a fair trial on each count.' },
        { id: 'M3', title: 'Motion to Exclude or Limit Cooperator Testimony', basis: 'Reliability and Brady/Giglio impeachment obligations.', likelyOutcome: 'denied', argument: 'The cooperating witnesses are testifying under extraordinary sentence-reduction incentives. The court should require full disclosure of their agreements and benefits and instruct the jury to weigh their testimony with great caution.' }
      ]
    }
  },
  {
    id: 'case-016',
    title: 'People v. Devon Harris',
    crimeType: 'FELONY MURDER',
    complexity: 'medium',
    favorability: 'defense',
    jurisdiction: 'Wayne County, Michigan',
    year: 2024,
    judge: 'Hon. Yolanda Pratt',
    opposingCounsel: { prosecution: 'Assistant Prosecuting Attorney Karen Mills', defense: 'Attorney Andre Cole' },
    summary: 'A 25-year-old who served as a lookout during a jewelry-store robbery is charged with felony murder after his co-defendant shot and killed the owner. Harris says he never knew his accomplice was armed.',
    backstory: `On the afternoon of May 6, 2024, two men robbed Delmar Fine Jewelers in Detroit. One, Anthony Martinez, went inside; the other, Devon Harris, 25, stayed near the entrance as a lookout. When the owner reached beneath the counter, Martinez shot and killed him.

Martinez has since pleaded guilty. Harris went to trial. The prosecution charges him with felony murder under Michigan law: a death during the commission of an enumerated felony renders all participants liable. Harris’s fingerprints were on a tray of stolen merchandise recovered afterward, and Martinez’s plea allocution names Harris as his partner.

Harris insists he agreed only to a robbery, believed it would be quick and bloodless, and never knew Martinez had brought a gun. Store surveillance shows Harris outside the whole time; he never entered the area where the shooting occurred. The defense argues that felony murder is being stretched to capture a young man who neither killed nor intended a killing.

The case sits at the contested edge of felony-murder doctrine — and at the constitutional limits of using a non-testifying co-defendant’s words against the accused.`,
    accused: { name: 'Devon Harris', age: 25, occupation: 'Warehouse worker', background: 'One prior misdemeanor (retail fraud). No history of violence.', priorRecord: 'One misdemeanor retail-fraud conviction.' },
    victim: { name: 'Delmar Okeke', age: 58, occupation: 'Jewelry-store owner', relationship: 'Robbery victim' },
    charges: [
      { count: 1, charge: 'Felony Murder', penal: 'MCL 750.316(1)(b)', maxSentence: 'Life without parole' },
      { count: 2, charge: 'Armed Robbery', penal: 'MCL 750.529', maxSentence: 'Up to life' }
    ],
    prosecutionTheory: 'Devon Harris chose to commit an armed robbery. Under Michigan law, when a death results from that felony, every participant answers for it. Whether he personally pulled the trigger or stood watch at the door is beside the point — he set the deadly events in motion and shares responsibility for the owner’s death.',
    defenseTheory: 'Devon Harris agreed to a robbery, not a killing, and never knew his accomplice carried a gun. He stood outside, touched nothing in the shooting area, and harmed no one. Felony murder should not transform a lookout with no knowledge of a weapon into a man facing life without parole for a killing he neither did nor foresaw.',
    prosecutionStrategies: ['Establish Harris’s knowing participation in the armed robbery', 'Use the fingerprints on the stolen tray to tie him to the proceeds', 'Argue felony-murder liability does not require intent to kill'],
    defenseStrategies: ['Show Harris remained outside and never entered the shooting area', 'Attack any use of Martinez’s allocution as a Confrontation Clause violation', 'Argue lack of knowledge of the weapon and the injustice of the felony-murder reach'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Co-defendant Martinez’s plea allocution identifying Harris as his partner in the robbery.', strength: 'moderate' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Harris’s fingerprints recovered on a tray of stolen merchandise.', strength: 'moderate' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Store surveillance footage showing Harris stationed at the entrance during the robbery.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Harris’s statement to police admitting he agreed to act as a lookout.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Surveillance footage establishing Harris remained outside and never entered the area where the shooting occurred.', strength: 'strong' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Harris’s statement denying any knowledge that Martinez was armed.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Absence of any firearm purchase, possession, or handling traceable to Harris.', strength: 'moderate' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Detective Marcus Webb', role: 'Lead Detective, Detroit PD', testimony: 'Will testify to the investigation, the surveillance, the fingerprints, and Harris’s admission to acting as a lookout.', weaknesses: 'Cannot show Harris knew of the gun; footage places him outside throughout.', aiPersona: "You are Detective Marcus Webb of the Detroit Police Department. You investigated the jewelry-store robbery and homicide. You testify that Harris admitted to acting as a lookout and that his prints were on a stolen tray. On cross you concede the surveillance shows Harris stayed outside, that he never entered the shooting area, and that you have no evidence he knew Martinez was armed." },
        { id: 'PW2', name: 'Anita Okeke', role: 'Victim’s Widow / Store Employee', testimony: 'Was present and will describe the robbery and the shooting of her husband.', weaknesses: 'Did not see Harris with a weapon and cannot speak to his knowledge of the gun.', aiPersona: "You are Anita Okeke, the victim's widow, who was working in the store during the robbery. You describe the terror of the robbery and watching the man inside shoot your husband. You are grieving. On cross you confirm the man who shot your husband was inside, that you did not see the man at the door with a weapon, and that you cannot say what the lookout knew." }
      ],
      defense: [
        { id: 'DW1', name: 'Lisa Tran', role: 'Forensic Video Analyst (Defense)', testimony: 'Will testify the surveillance establishes Harris never entered the store interior or the shooting area.', weaknesses: 'Confirms his presence at the scene; does not negate participation in the robbery itself.', aiPersona: "You are Lisa Tran, a forensic video analyst for the defense. You synchronized and analyzed the surveillance feeds. You testify that Harris remained at the entrance the entire time and never crossed into the area where the shooting happened. On cross you acknowledge that the footage does place Harris at the scene acting as a lookout." },
        { id: 'DW2', name: 'Devon Harris', role: 'Defendant (if called)', testimony: 'Will testify he agreed only to a quick robbery, never knew Martinez had a gun, and was horrified when he heard the shot.', weaknesses: 'His prior retail-fraud conviction may come in; the prosecution will press why he ran.', aiPersona: "You are Devon Harris, the defendant. You agreed to help Martinez rob the store and to watch the door. You swear you never knew he had a gun — you thought it would be fast and that no one would get hurt. When you heard the shot you froze and then ran in panic. You are remorseful that you took part in the robbery, but you are not a killer and you never wanted anyone to die." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude the Co-Defendant’s Allocution', basis: 'Sixth Amendment Confrontation Clause (Bruton v. United States).', likelyOutcome: 'granted', argument: 'Martinez will not testify, yet the prosecution seeks to use his plea allocution to incriminate Harris. Admitting a non-testifying co-defendant’s statement against the accused violates the Confrontation Clause under Bruton and must be excluded.' },
        { id: 'M2', title: 'Motion for a Jury Instruction on Felony-Murder Mental State', basis: 'Due process — accurate instruction on the required mental state for an aider and abettor.', likelyOutcome: 'granted', argument: 'The jury must be instructed that to convict an aider and abettor of felony murder, the State must prove the defendant’s own culpable mental state, not merely participation in the underlying felony. An accurate instruction is essential to a fair verdict.' },
        { id: 'M3', title: 'Motion to Exclude the Defendant’s Prior Misdemeanor', basis: 'Michigan Rule of Evidence 609 — improper impeachment by an unrelated conviction.', likelyOutcome: 'contested', argument: 'The prior retail-fraud misdemeanor has minimal bearing on truthfulness and substantial potential to prejudice the jury against the defendant. Under Rule 609 its prejudicial effect outweighs any probative value and it should be excluded.' }
      ]
    }
  },
  {
    id: 'case-017',
    title: 'People v. Serena Blake',
    crimeType: 'FRAUD / MURDER',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'Los Angeles County Superior Court',
    year: 2025,
    judge: 'Hon. Eduardo Marin',
    opposingCounsel: { prosecution: 'Deputy DA Rachel Stone', defense: 'Attorney Victor Hale' },
    summary: 'A lifestyle influencer who ran a fraudulent investment platform is charged with defrauding her followers of $8.2 million and with murdering the accountant who threatened to report her, after the accountant’s death was initially ruled a suicide.',
    backstory: `Serena Blake, 33, built a following of millions promoting a luxe lifestyle and, eventually, an "exclusive" investment platform called LuxeGrow. Prosecutors say LuxeGrow was a sham that took roughly $8.2 million from about 2,400 of her followers.

Her accountant, Monica Reyes, discovered the fraud and emailed Blake that she intended to report it to the SEC. Two weeks later, Reyes was found dead in her apartment of an apparent overdose; the death was initially ruled a suicide. Reyes’s family insisted she was not suicidal.

A renewed forensic review found that Reyes’s phone had been remotely wiped in the hours before her death and that Blake’s own device had accessed Reyes’s iCloud credentials eleven days earlier. The State charges Blake with fraud and with Reyes’s murder.

The defense counters that there is no direct evidence Blake was ever in the apartment, that settlement talks over the fraud were already underway — undercutting any motive to kill — and that the toxicology remains consistent with suicide. The case braids a financial-crimes prosecution into a circumstantial murder.`,
    accused: { name: 'Serena Blake', age: 33, occupation: 'Social-media influencer / founder of LuxeGrow', background: 'No prior record. Public persona of wealth; finances heavily strained behind the scenes.', priorRecord: 'None.' },
    victim: { name: 'Monica Reyes', age: 41, occupation: 'Accountant', relationship: 'Defendant’s accountant / whistleblower' },
    charges: [
      { count: 1, charge: 'Securities Fraud', penal: 'Cal. Corp. Code § 25541', maxSentence: 'Up to 5 years per count' },
      { count: 2, charge: 'Theft by False Pretenses (Aggregated)', penal: 'Cal. Penal Code § 532', maxSentence: 'Up to 4 years' },
      { count: 3, charge: 'Murder (First Degree)', penal: 'Cal. Penal Code § 187(a)', maxSentence: '25 years to life' }
    ],
    prosecutionTheory: 'Serena Blake stole $8.2 million from people who trusted her, and when Monica Reyes threatened to expose the fraud, Blake silenced her. Blake accessed Reyes’s credentials, wiped her phone to erase the evidence, and staged a suicide. The financial crime supplied the motive; the digital trail supplies the proof.',
    defenseTheory: 'LuxeGrow failed, but failure is not murder. There is no physical evidence Serena Blake was ever in Monica Reyes’s apartment. Settlement discussions over the fraud were already underway, removing any motive to kill. The toxicology is consistent with the original suicide ruling, and the State is stitching a homicide out of digital coincidence.',
    prosecutionStrategies: ['Tie the iCloud access and remote wipe directly to Blake’s devices', 'Use Reyes’s SEC-threat email to establish motive', 'Present the $8.2M fraud to show what Blake stood to lose', 'Rebut the suicide theory with the timing of the phone wipe'],
    defenseStrategies: ['Stress the absence of any forensic evidence placing Blake at the scene', 'Argue ongoing settlement talks negate a motive to kill', 'Use the toxicology to support the original suicide ruling', 'Attack the inference from device logs to physical presence'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'iCloud access logs showing the victim’s credentials were accessed from a device tied to the defendant eleven days before the death.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Forensic records showing the victim’s phone was remotely wiped in the hours before her death.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'The victim’s email to the defendant stating her intent to report the fraud to the SEC.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Bank and platform records documenting roughly $8.2 million taken from about 2,400 investors via LuxeGrow.', strength: 'strong' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Investor account statements showing fabricated returns generated by the platform.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Toxicology report consistent with the medication overdose and the original suicide ruling.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Correspondence showing settlement negotiations over the fraud were underway at the time of the death.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Forensic findings noting no DNA, fingerprints, or surveillance placing the defendant in or near the victim’s apartment.', strength: 'strong' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Analyst Priya Shah', role: 'Digital Forensics Examiner', testimony: 'Will testify the victim’s iCloud was accessed from the defendant’s device and that the phone was remotely wiped before death.', weaknesses: 'Device activity does not equal physical presence; defense will press the gap.', aiPersona: "You are Priya Shah, a digital forensics examiner. You analyzed the victim's iCloud logs and phone. You testify that the victim's credentials were accessed from a device tied to Serena Blake eleven days before the death and that the phone was remotely wiped hours before Reyes died. You are precise. On cross you concede that device activity shows access, not that Blake was physically present in the apartment." },
        { id: 'PW2', name: 'Agent Thomas Reed', role: 'Financial Crimes Investigator', testimony: 'Establishes the $8.2M fraud and Reyes’s discovery of it and the SEC threat.', weaknesses: 'Proves motive and fraud, not the act of killing.', aiPersona: "You are Agent Thomas Reed, a financial-crimes investigator. You documented how LuxeGrow took about $8.2 million from roughly 2,400 investors and how Monica Reyes discovered it and threatened to go to the SEC. You testify to the scheme and the motive it gave Blake. On cross you acknowledge your work proves financial fraud and motive, not that Blake committed the homicide." },
        { id: 'PW3', name: 'Carmen Reyes', role: 'Victim’s Sister', testimony: 'Will testify the victim was not suicidal and was afraid of the defendant in her final weeks.', weaknesses: 'Grieving and biased; her opinion of suicidality is not clinical.', aiPersona: "You are Carmen Reyes, Monica's sister. You testify Monica was not suicidal — she was planning a vacation and was afraid of Serena Blake in her last weeks. You are grieving and certain your sister did not take her own life. On cross you concede you are not a mental-health professional and that you were not with Monica on the night she died." }
      ],
      defense: [
        { id: 'DW1', name: 'Dr. Helen Marsh', role: 'Forensic Toxicologist (Defense)', testimony: 'Will testify the toxicology is consistent with a self-administered overdose and the original suicide finding.', weaknesses: 'Cannot exclude a staged overdose; does not address the phone wipe.', aiPersona: "You are Dr. Helen Marsh, a forensic toxicologist for the defense. You reviewed the toxicology and the autopsy. You testify the findings are consistent with a self-administered overdose, supporting the original suicide ruling. On cross you concede you cannot affirmatively rule out that someone else administered the drugs, and that toxicology alone does not explain the remote phone wipe." },
        { id: 'DW2', name: 'Serena Blake', role: 'Defendant (if called)', testimony: 'Will deny killing Reyes, claim she was never in the apartment, and contend settlement talks removed any motive.', weaknesses: 'The fraud evidence is strong; the device access and wipe are hard to explain on cross.', aiPersona: "You are Serena Blake, the defendant. You deny harming Monica Reyes and insist you were never in her apartment. You acknowledge LuxeGrow failed and that you were in settlement discussions, which you say is why you had no reason to hurt anyone. You are polished and composed. On cross you struggle to explain why your device accessed Monica's iCloud and you grow defensive about the fraud, but you maintain you are not a murderer." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress the iCloud and Device Logs', basis: 'Fourth Amendment — scope and validity of the warrant for digital records.', likelyOutcome: 'denied', argument: 'The digital records were obtained under a warrant that the defense contends was overbroad and lacked particularity as to the accounts searched. Evidence exceeding the warrant’s lawful scope must be suppressed.' },
        { id: 'M2', title: 'Motion to Sever the Murder Count from the Fraud Counts', basis: 'Cal. Penal Code § 954 / Rule 403 — prejudicial joinder of distinct offenses.', likelyOutcome: 'contested', argument: 'Joining a circumstantial murder charge with a sympathetic mass-fraud case invites the jury to convict on emotion and spillover rather than proof of each offense. Severance is necessary to ensure each charge is decided on its own evidence.' },
        { id: 'M3', title: 'Motion to Admit the Original Suicide Determination', basis: 'Relevance — the initial manner-of-death ruling is probative of reasonable doubt.', likelyOutcome: 'granted', argument: 'The coroner’s original determination of suicide is directly relevant to whether a homicide occurred at all. The defense is entitled to present it for the jury to weigh against the State’s revised theory.' }
      ]
    }
  },
  {
    id: 'case-018',
    title: 'United States v. Raymond Kellner',
    crimeType: 'BRIBERY / RICO',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'U.S. District Court, D.N.J.',
    year: 2025,
    judge: 'Hon. Patricia Vance',
    opposingCounsel: { prosecution: 'AUSA Daniel Brooks', defense: 'Attorney Stephen Mercer' },
    summary: 'A sitting federal district judge is accused of accepting $2.1 million from an organized-crime family over seven years in exchange for favorable rulings and a tip about a grand-jury investigation. The defense says the payments were loans from an old friend and his rulings were legally sound.',
    backstory: `Raymond Kellner, 58, sat on the federal bench for over a decade. The government now alleges that for seven of those years he was on the payroll of the Marchetti organized-crime family, accepting some $2.1 million in exchange for official acts.

According to the indictment, Kellner dismissed four federal cases against Marchetti associates on contrived procedural grounds, altered the disposition of a fifth, and, most damaging, tipped the family to a grand-jury investigation. The case rests on bank records, a wire intercept of a bribe delivery, a statistical analysis of his rulings, and the testimony of a Marchetti lieutenant now cooperating with the government.

Kellner maintains that every ruling was legally defensible on its own merits, that the money was a series of personal loans from a decades-long friend with no connection to any case, and that the cooperating witness is a career criminal inventing a story to escape his own sentence.

A sitting federal judge on trial is a landmark event. The jury must separate the appearance of corruption from proof of a corrupt agreement — the quid pro quo at the heart of bribery law.`,
    accused: { name: 'Raymond Kellner', age: 58, occupation: 'U.S. District Judge', background: 'Distinguished legal career; no prior record. Longtime personal ties to the alleged briber.', priorRecord: 'None.' },
    victim: { name: 'The United States / the integrity of the federal judiciary', age: 'N/A', occupation: 'N/A', relationship: 'Institutional victim' },
    charges: [
      { count: 1, charge: 'RICO Conspiracy', penal: '18 U.S.C. § 1962(d)', maxSentence: '20 years' },
      { count: 2, charge: 'Bribery of a Public Official', penal: '18 U.S.C. § 201(b)', maxSentence: '15 years' },
      { count: 3, charge: 'Obstruction of Justice', penal: '18 U.S.C. § 1503', maxSentence: '10 years' }
    ],
    prosecutionTheory: 'Raymond Kellner sold the federal bench. Over seven years he took $2.1 million from the Marchetti family and gave back official acts: dismissed cases, an altered verdict, and a tip that compromised a grand jury. The bank records, the intercepted bribe, the pattern of rulings, and an insider’s account converge on a corrupt bargain.',
    defenseTheory: 'Every ruling Judge Kellner made was legally sound and would have come out the same from any fair judge. The money was a series of personal loans from a friend of thirty years, unconnected to any case. The government’s star witness is a mob lieutenant trading a fairy tale for a lighter sentence. There is no proven quid pro quo — only proximity and innuendo.',
    prosecutionStrategies: ['Match the timing of payments to the timing of favorable rulings', 'Play the intercepted bribe delivery', 'Use the cooperator to explain the corrupt arrangement from the inside', 'Present the statistical anomaly in rulings favoring Marchetti associates'],
    defenseStrategies: ['Defend each ruling as legally correct on independent grounds', 'Characterize the money as documented personal loans', 'Destroy the cooperator’s credibility and his sentencing incentive', 'Argue the statistics show correlation, not a corrupt agreement'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Bank records documenting roughly $2.1 million in payments to the defendant over seven years.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'A wire intercept capturing the delivery of a cash bribe to the defendant.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Statistical and case analysis showing an anomalous pattern of rulings favoring Marchetti associates.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Testimony of a cooperating Marchetti lieutenant describing the bribery arrangement and the grand-jury tip.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Records showing the grand-jury investigation was compromised shortly after the alleged tip.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Promissory notes and personal correspondence framing the payments as loans from a longtime friend.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Independent legal analysis concluding each challenged ruling was defensible on its own merits.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'The cooperator’s plea agreement reflecting a substantial sentence reduction for his testimony.', strength: 'strong' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Special Agent Nina Castellano', role: 'FBI Public Corruption Unit', testimony: 'Will present the bank records, the intercept, and the timeline tying payments to official acts.', weaknesses: 'Cannot directly prove the rulings were caused by the payments rather than coincident with them.', aiPersona: "You are FBI Special Agent Nina Castellano of the Public Corruption Unit. You assembled the financial trail and the wire intercept and built the timeline aligning payments to Kellner's favorable rulings. You are confident the pattern reflects a corrupt bargain. On cross you concede that timing shows correlation and that you cannot read the judge's mind, but you point to the totality of the evidence." },
        { id: 'PW2', name: 'Vincent Marchetti', role: 'Cooperating Witness (family lieutenant)', testimony: 'Will testify he personally delivered payments and that Kellner agreed to favorable rulings and the grand-jury tip.', weaknesses: 'A career criminal with a powerful incentive to please prosecutors; substantial sentence reduction.', aiPersona: "You are Vincent Marchetti, a lieutenant in the Marchetti family, now cooperating. You testify that you delivered cash to Judge Kellner and that he agreed to take care of the family's cases and warned you about the grand jury. You are matter-of-fact about your own crimes. On cross you must admit your deal cut your sentence dramatically and that you have lied before, but you insist this account is true." }
      ],
      defense: [
        { id: 'DW1', name: 'Professor Eleanor Reid', role: 'Legal Ethics Expert (Defense)', testimony: 'Will testify each challenged ruling was legally defensible and within judicial discretion.', weaknesses: 'Cannot explain the payments or the intercept; addresses legality, not motive.', aiPersona: "You are Professor Eleanor Reid, a legal-ethics expert for the defense. You reviewed each of Judge Kellner's challenged rulings and testify that all were legally defensible and within the bounds of judicial discretion. On cross you acknowledge that a ruling being legally defensible does not, by itself, explain the money or the intercepted bribe, and that you are opining only on the law, not on the judge's intent." },
        { id: 'DW2', name: 'Arthur Penn', role: 'Defendant’s Longtime Friend', testimony: 'Will testify the payments to Kellner were personal loans between old friends, unrelated to any case.', weaknesses: 'Close friend; the loan documentation is thin against $2.1 million over seven years.', aiPersona: "You are Arthur Penn, a friend of Raymond Kellner for thirty years. You testify that the money was a series of personal loans between friends and had nothing to do with any court case. You believe in Raymond. On cross you struggle to fully document $2.1 million in 'loans' over seven years and you concede the records are informal, but you maintain they were genuine." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Suppress the Bank Records', basis: 'Fourth Amendment — the subpoena for financial records was overbroad.', likelyOutcome: 'denied', argument: 'The grand-jury subpoena swept in years of financial records far beyond any particularized showing of relevance. Records obtained through an overbroad demand should be suppressed.' },
        { id: 'M2', title: 'Motion for a Change of Venue', basis: 'Sixth Amendment — pretrial publicity prejudicing the jury pool.', likelyOutcome: 'contested', argument: 'The prosecution of a sitting federal judge has saturated local media, making an impartial jury in this district unlikely. Due process requires transferring the trial to a venue untainted by the coverage.' },
        { id: 'M3', title: 'Motion to Limit Cooperator Testimony and Compel Disclosure', basis: 'Brady/Giglio — disclosure of benefits and prior inconsistent statements.', likelyOutcome: 'granted', argument: 'The cooperating witness testifies under a sweeping sentence-reduction agreement. The defense is entitled to full disclosure of every benefit and prior inconsistent statement, and the jury must be instructed to scrutinize his testimony with care.' }
      ]
    }
  },
  {
    id: 'case-019',
    title: 'People v. Mei-Ling Chen',
    crimeType: 'HUMAN TRAFFICKING',
    complexity: 'high',
    favorability: 'prosecution',
    jurisdiction: 'Santa Clara County, California',
    year: 2024,
    judge: 'Hon. Howard Quan',
    opposingCounsel: { prosecution: 'Deputy DA Anna Reyes', defense: 'Attorney Brian Loh' },
    summary: 'The operator of a "domestic staffing agency" is accused of trafficking eight women from Vietnam, confiscating their documents and forcing them to work without pay under threat of deportation. The defense calls it a consensual employment arrangement.',
    backstory: `Mei-Ling Chen, 44, ran what she called a domestic staffing agency, placing women from Vietnam as live-in housekeepers in affluent homes. Prosecutors say it was a trafficking operation. Eight women were recruited with promises of legal, paid work, brought in on tourist visas, then stripped of their passports and made to work sixteen-hour days for little or no pay.

According to the State, Chen controlled the women through fear: she held their documents, threatened them with deportation and arrest, and isolated them in cramped quarters. Several eventually escaped and came forward, leading to charges and the recovery of the confiscated passports.

Chen contends the women came willingly, were free to leave, and were paid in cash and in-kind room and board. She says she held the documents for "safekeeping" at the women’s request and points out that one alleged victim later returned to work for her.

The case turns on coercion — whether the women’s "consent" was real or compelled — and on California’s human-trafficking statute, which criminalizes obtaining labor through force, fraud, or coercion.`,
    accused: { name: 'Mei-Ling Chen', age: 44, occupation: 'Owner of a domestic staffing agency', background: 'No prior record. Operated the agency for roughly six years.', priorRecord: 'None.' },
    victim: { name: 'Eight trafficking survivors', age: 'Various (20s–30s)', occupation: 'Recruited domestic workers', relationship: 'Victims' },
    charges: [
      { count: 1, charge: 'Human Trafficking (Forced Labor) — Multiple Counts', penal: 'Cal. Penal Code § 236.1(a)', maxSentence: '5, 8, or 12 years per count' },
      { count: 2, charge: 'Document Servitude', penal: 'Cal. Penal Code § 236.1(a)', maxSentence: 'Up to 12 years' }
    ],
    prosecutionTheory: 'Mei-Ling Chen lured eight women across the world with promises of honest work, then trapped them. She took their passports, paid them little or nothing, worked them sixteen hours a day, and held deportation over their heads to keep them compliant. That is not employment — it is human trafficking through fraud and coercion.',
    defenseTheory: 'These women came to America voluntarily for work, were free to come and go, and were compensated with wages, housing, and meals. Ms. Chen held documents for safekeeping, as some asked her to. The fact that one of the supposed victims chose to return and work for her again shows these were employment relationships, not captivity.',
    prosecutionStrategies: ['Center the survivors’ consistent accounts of coercion and confiscated documents', 'Use the recovered passports and the threatening messages as proof of control', 'Show the financial records reflecting Chen’s profit and the workers’ lack of pay', 'Explain that consent obtained by fraud or coercion is no defense'],
    defenseStrategies: ['Emphasize the voluntary initial decision to come and work', 'Argue the documents were held at the workers’ request', 'Point to the returning worker as evidence of a genuine employment relationship', 'Attack inconsistencies and immigration incentives in the survivors’ accounts'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'Testimony of multiple survivors describing recruitment by false promises, confiscated passports, unpaid labor, and threats of deportation.', strength: 'strong' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Eight victims’ passports recovered from a safe in the defendant’s office.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Financial records showing substantial payments from host families to the defendant and little or none reaching the workers.', strength: 'strong' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Text messages from the defendant threatening workers with deportation and police if they left.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Photographs of the cramped shared quarters where the workers were housed.', strength: 'moderate' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Signed agreements in which the workers consented to placement and to the agency holding documents.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Records and testimony that one alleged victim voluntarily returned to work for the defendant.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Cash-payment logs the defense offers to show the workers received wages and room and board.', strength: 'weak' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Special Agent Karen Diaz', role: 'Homeland Security Investigations', testimony: 'Will testify to the investigation, the recovered passports, the financial records, and the threatening messages.', weaknesses: 'Relies on survivor accounts; defense will raise immigration-benefit incentives.', aiPersona: "You are Special Agent Karen Diaz of Homeland Security Investigations. You ran the investigation into Chen's agency. You recovered eight passports from her office safe, traced the money, and documented threatening texts. You testify to the pattern of control. On cross you acknowledge that the survivors may be eligible for immigration relief as trafficking victims, but you point to the corroborating physical and financial evidence." },
        { id: 'PW2', name: 'Linh Pham', role: 'Survivor / Complaining Witness', testimony: 'Will describe being recruited by false promises, having her passport taken, working without pay, and being threatened.', weaknesses: 'Initial agreement was voluntary; defense will probe inconsistencies and the immigration incentive.', aiPersona: "You are Linh Pham, one of the women. You came from Vietnam believing you would have legal, paid work. Once here, Chen took your passport, made you work sixteen-hour days cleaning houses, paid you almost nothing, and warned that if you left you would be deported or arrested. You were terrified and isolated. On cross you admit you chose to come and signed papers you didn't fully understand, but you explain you had no real freedom once you arrived." }
      ],
      defense: [
        { id: 'DW1', name: 'Grace Tan', role: 'Returning Worker', testimony: 'Will testify she chose to work for the defendant, was paid, and returned of her own accord.', weaknesses: 'May have returned out of economic necessity; one account does not negate the others.', aiPersona: "You are Grace Tan, who worked through Chen's agency. You testify that you were paid, treated fairly in your view, and chose to come back to work for Chen again. You believe the arrangement was a job. On cross you concede you needed the income and had few options, and that you cannot speak to how the other women were treated." },
        { id: 'DW2', name: 'Mei-Ling Chen', role: 'Defendant (if called)', testimony: 'Will testify the workers came voluntarily, were paid in cash and lodging, and that she held documents for safekeeping.', weaknesses: 'The confiscated passports, the financials, and the threatening texts are difficult to explain.', aiPersona: "You are Mei-Ling Chen, the defendant. You insist your agency gave women jobs and a better life. You say they came willingly, were paid in cash plus room and board, and that you held their passports only for safekeeping, as some asked. You are firm and somewhat indignant. On cross you struggle to explain why the workers received so little money and why your texts threatened deportation, but you maintain no one was forced." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Admit Expert Testimony on Trafficking Coercion', basis: 'Cal. Evid. Code § 801 — specialized knowledge aiding the jury.', likelyOutcome: 'granted', argument: 'The dynamics of trafficking-based coercion are beyond common experience and explain why victims may appear to "consent" or even return. Expert testimony is admissible under Section 801 to help the jury evaluate the survivors’ conduct.' },
        { id: 'M2', title: 'Motion to Exclude References to the Defendant’s Immigration-Related Conduct', basis: 'Cal. Evid. Code § 352 — undue prejudice.', likelyOutcome: 'contested', argument: 'Generalized references to immigration status risk inflaming the jury and distracting from the trafficking elements. Their prejudicial effect substantially outweighs probative value and they should be limited under Section 352.' },
        { id: 'M3', title: 'Motion to Admit the Signed Placement Agreements', basis: 'Relevance — bears on the workers’ consent and the nature of the arrangement.', likelyOutcome: 'granted', argument: 'The signed agreements are directly relevant to the central question of consent and the character of the relationship. The defense is entitled to present them for the jury to weigh against the coercion claims.' }
      ]
    }
  },
  {
    id: 'case-020',
    title: 'People v. Theodore Marsh III',
    crimeType: 'ARSON / MURDER (6 DEATHS)',
    complexity: 'high',
    favorability: 'balanced',
    jurisdiction: 'New York County, New York',
    year: 2024,
    judge: 'Hon. Miriam Goldfarb',
    opposingCounsel: { prosecution: 'ADA Joseph Tran', defense: 'Attorney Caroline West' },
    summary: 'A real-estate developer is accused of burning down a 32-unit building full of holdout tenants to clear the way for a luxury hotel, killing six residents. He says a cryptic text the State calls a confession referred only to a zoning approval.',
    backstory: `Theodore Marsh III, 47, bought a 32-unit apartment building in Manhattan for $4.2 million, intending to demolish it for a luxury hotel. The tenants refused to leave, and fourteen months of eviction litigation went nowhere.

At 12:08 a.m. on April 3, 2024, the building burned. Investigators found accelerant at four separate points of origin. Six residents died. Seventeen minutes earlier, at 11:51 p.m., Marsh had texted his architect: "The site will be ready ahead of schedule."

The prosecution calls the text a confession and the four origins proof of a professional arson commissioned to clear the building. The defense says the text referred to a zoning approval Marsh had just received, that the deaths actually complicated his project rather than helping it, and that a disgruntled former building superintendent had made threats. No accelerant or physical evidence ties Marsh personally to the fire.

Surveillance caught an unidentified figure near the building before the blaze. The case is a battle of inference: a powerful motive and an ominous text against an entirely circumstantial record and a plausible alternative suspect.`,
    accused: { name: 'Theodore Marsh III', age: 47, occupation: 'Real-estate developer', background: 'No prior record. Highly leveraged on the hotel project; tenants blocked the development.', priorRecord: 'None.' },
    victim: { name: 'Six building residents', age: 'Various', occupation: 'Tenants', relationship: 'Residents of the building' },
    charges: [
      { count: 1, charge: 'Arson in the First Degree', penal: 'N.Y. Penal Law § 150.20', maxSentence: '15–25 years to life' },
      { count: 2, charge: 'Murder in the Second Degree (Felony Murder) — Six Counts', penal: 'N.Y. Penal Law § 125.25(3)', maxSentence: '15 years to life each' }
    ],
    prosecutionTheory: 'Theodore Marsh could not evict the tenants standing between him and a fortune, so he had them burned out. The fire was set professionally at four points of origin, minutes after Marsh told his architect the site would be "ready ahead of schedule." Six people died so that a hotel could rise. Motive, timing, and his own words convict him.',
    defenseTheory: 'There is not one piece of physical evidence connecting Theodore Marsh to this fire. The text the State calls a confession referred to a zoning approval he had just won. Six deaths did not clear his path — they buried his project in litigation and scrutiny. Meanwhile a former superintendent who threatened the building remains uninvestigated. This is suspicion dressed up as proof.',
    prosecutionStrategies: ['Frame the 11:51 p.m. text against the 12:08 a.m. fire as a confession of timing', 'Use the four points of origin to establish a deliberate, professional arson', 'Tie the financial pressure and stalled evictions to motive', 'Connect the development contract incentives to clearing the building'],
    defenseStrategies: ['Explain the text as referring to a zoning approval, with corroboration', 'Stress the total absence of accelerant or forensic evidence on Marsh', 'Develop the former superintendent as a viable third-party suspect', 'Argue the deaths harmed, not helped, the development'],
    evidence: {
      prosecution: [
        { id: 'P1', label: 'Exhibit P-1', description: 'The defendant’s 11:51 p.m. text to his architect: "The site will be ready ahead of schedule," seventeen minutes before the fire.', strength: 'moderate' },
        { id: 'P2', label: 'Exhibit P-2', description: 'Fire-investigation report identifying accelerant at four separate points of origin.', strength: 'strong' },
        { id: 'P3', label: 'Exhibit P-3', description: 'Development contract provisions tying the defendant’s profit to delivering a vacant, demolition-ready site.', strength: 'moderate' },
        { id: 'P4', label: 'Exhibit P-4', description: 'Records of fourteen months of failed eviction proceedings against the building’s tenants.', strength: 'moderate' },
        { id: 'P5', label: 'Exhibit P-5', description: 'Medical examiner reports establishing the six residents died of smoke inhalation and burns.', strength: 'strong' }
      ],
      defense: [
        { id: 'D1', label: 'Exhibit D-1', description: 'Municipal records showing a zoning approval was issued to the defendant on the day of the text.', strength: 'moderate' },
        { id: 'D2', label: 'Exhibit D-2', description: 'Documented prior threats against the building by a former superintendent who had been fired.', strength: 'moderate' },
        { id: 'D3', label: 'Exhibit D-3', description: 'Forensic findings of no accelerant on the defendant’s person, clothing, or vehicle, and no eyewitness placing him at the scene.', strength: 'strong' }
      ]
    },
    witnesses: {
      prosecution: [
        { id: 'PW1', name: 'Marshal Ellen Boyd', role: 'FDNY Fire Marshal', testimony: 'Will testify the four points of origin and accelerant establish a deliberate, professionally set fire.', weaknesses: 'Cannot connect the arson to Marsh personally; an unidentified figure appears on surveillance.', aiPersona: "You are Ellen Boyd, an FDNY Fire Marshal. You determined the fire was intentionally set, with accelerant at four separate points of origin — a deliberate, professional job. You are firm that this was arson. On cross you concede you cannot identify who set it, that no physical evidence ties Theodore Marsh to the scene, and that an unidentified figure appears on nearby surveillance." },
        { id: 'PW2', name: 'Daniel Cho', role: 'Defendant’s Architect', testimony: 'Received the 11:51 p.m. text and will testify about the development timeline and pressures.', weaknesses: 'Did not understand the text as referring to arson; a zoning approval issued that day offers an innocent reading.', aiPersona: "You are Daniel Cho, the architect on Marsh's hotel project. You received his text at 11:51 p.m. saying the site would be 'ready ahead of schedule.' You testify about the project timeline and the pressure Marsh was under. On cross you admit you did not take the text to mean anything sinister at the time, and that a zoning approval had come through that very day which the message could have referred to." },
        { id: 'PW3', name: 'Robert Quaid', role: 'Development Financial Consultant', testimony: 'Establishes the financial pressure on the project and the value of a vacant, demolition-ready site.', weaknesses: 'Also concedes that resident deaths invite litigation and scrutiny that harm a project.', aiPersona: "You are Robert Quaid, a financial consultant on the development. You testify that Marsh was highly leveraged and that a vacant, demolition-ready building was worth far more to the project than an occupied one. On cross you concede that a fire with six deaths brings investigations, lawsuits, and delay that damage a development, and that the deaths complicated rather than cleared Marsh's path." }
      ],
      defense: [
        { id: 'DW1', name: 'Frank DeLuca', role: 'Private Fire Investigator (Defense)', testimony: 'Will testify the evidence does not connect Marsh to the fire and that another individual had motive and opportunity.', weaknesses: 'Does not dispute that the fire was arson; offers an alternative, not an alibi.', aiPersona: "You are Frank DeLuca, a private fire investigator for the defense. You reviewed the scene evidence. You agree the fire was set, but you testify there is nothing physical connecting Theodore Marsh to it, and you point to the fired superintendent's threats and the unidentified figure on surveillance as an alternative explanation. On cross you concede you cannot prove who set the fire either." },
        { id: 'DW2', name: 'Theodore Marsh III', role: 'Defendant (if called)', testimony: 'Will testify the text referred to a zoning approval and deny any involvement in the fire.', weaknesses: 'The motive and timing are powerful; the prosecution will press the coincidence of the text and the fire.', aiPersona: "You are Theodore Marsh III, the defendant. You deny any role in the fire. You testify that your 11:51 p.m. text meant the project was on track because you had just received a zoning approval that day — not that the building was about to burn. You point out the deaths buried your project in litigation. You are confident and articulate. On cross you must confront the brutal timing of the text and the fire and the strength of your financial motive, but you maintain your innocence." }
      ]
    },
    pretrialMotions: {
      available: [
        { id: 'M1', title: 'Motion to Exclude the "Ahead of Schedule" Text', basis: 'N.Y. ambiguity / undue prejudice (People v. Scarola; CPL relevance).', likelyOutcome: 'contested', argument: 'The text is genuinely ambiguous and is fully explained by a zoning approval issued that day. Allowing the State to brand an innocuous message a "confession" invites speculation, and its prejudicial effect outweighs its slight probative value.' },
        { id: 'M2', title: 'Motion to Admit Third-Party Culpability Evidence', basis: 'Due process — the defendant’s right to present a complete defense (People v. Primo).', likelyOutcome: 'granted', argument: 'The former superintendent’s documented threats and the unidentified figure on surveillance provide a clear, non-speculative link to a third party with motive and opportunity. Under Primo, the defense is entitled to present this evidence to the jury.' },
        { id: 'M3', title: 'Motion to Challenge the Origin-and-Cause Analysis (Frye)', basis: 'Reliability of expert methodology (Frye standard in New York).', likelyOutcome: 'denied', argument: 'The defense seeks a Frye hearing on the methodology used to identify four points of origin. The conclusions rest on interpretive pattern analysis whose general acceptance the court should confirm before the testimony reaches the jury.' }
      ]
    }
  }
];
