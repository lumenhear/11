// Disorders data - in a real implementation, this might come from a JSON file
window.disordersData = [
    {
        id: 'aphasia',
        name: 'Aphasia',
        category: 'language',
        description: 'Language disorder caused by brain damage, affecting the ability to communicate.',
        symptoms: ['Difficulty speaking', 'Trouble understanding speech', 'Problems with reading and writing'],
        assessment: ['Boston Diagnostic Aphasia Examination', 'Western Aphasia Battery'],
        treatment: ['Speech-language therapy', 'Communication strategies', 'Augmentative communication']
    },
    {
        id: 'stuttering',
        name: 'Stuttering',
        category: 'fluency',
        description: 'Speech disorder characterized by repetition of sounds, syllables, or words.',
        symptoms: ['Sound repetitions', 'Prolongations', 'Blocks in speech'],
        assessment: ['Stuttering Severity Instrument', 'Speech sample analysis'],
        treatment: ['Fluency shaping', 'Stuttering modification', 'Cognitive-behavioral therapy']
    },
    {
        id: 'hearing-loss',
        name: 'Hearing Loss',
        category: 'hearing',
        description: 'Partial or complete inability to hear sounds in one or both ears.',
        symptoms: ['Difficulty understanding speech', 'Asking for repetition', 'Turning up volume'],
        assessment: ['Pure Tone Audiometry', 'Speech Audiometry', 'Tympanometry'],
        treatment: ['Hearing aids', 'Cochlear implants', 'Communication strategies']
    },
    {
        id: 'apraxia',
        name: 'Apraxia of Speech',
        category: 'speech',
        description: 'Motor speech disorder making it difficult to coordinate mouth movements for speech.',
        symptoms: ['Inconsistent speech errors', 'Groping for sounds', 'Difficulty with longer words'],
        assessment: ['Oral-motor examination', 'Speech sample analysis', 'Apraxia Battery for Adults'],
        treatment: ['Motor programming approaches', 'Articulatory kinematic therapy']
    },
    {
        id: 'dysarthria',
        name: 'Dysarthria',
        category: 'speech',
        description: 'Motor speech disorder resulting from neurological injury, affecting muscle control.',
        symptoms: ['Slurred speech', 'Slow rate of speech', 'Monotone voice'],
        assessment: ['Frenchay Dysarthria Assessment', 'Oral-motor examination'],
        treatment: ['Respiratory support training', 'Articulation exercises', 'Rate control strategies']
    },
    {
        id: 'voice-disorders',
        name: 'Voice Disorders',
        category: 'voice',
        description: 'Conditions affecting the quality, pitch, or loudness of the voice.',
        symptoms: ['Hoarseness', 'Vocal fatigue', 'Pain when speaking'],
        assessment: ['Laryngoscopy', 'Acoustic analysis', 'Perceptual evaluation'],
        treatment: ['Vocal hygiene education', 'Voice therapy', 'Medical intervention when needed']
    },
    {
        id: 'language-delay',
        name: 'Language Delay',
        category: 'language',
        description: 'When a child\'s language development is slower than typical developmental milestones.',
        symptoms: ['Limited vocabulary', 'Short sentences', 'Difficulty following directions'],
        assessment: ['Standardized language tests', 'Language sample analysis', 'Parent report'],
        treatment: ['Language stimulation', 'Parent training', 'Structured language activities']
    },
    {
        id: 'articulation-disorder',
        name: 'Articulation Disorder',
        category: 'speech',
        description: 'Difficulty producing speech sounds correctly in the absence of structural or neurological issues.',
        symptoms: ['Sound substitutions', 'Sound omissions', 'Sound distortions'],
        assessment: ['Articulation tests', 'Oral mechanism examination', 'Speech sample analysis'],
        treatment: ['Articulation therapy', 'Minimal pairs approach', 'Traditional articulation therapy']
    },
    {
        id: 'autism-communication',
        name: 'Autism Communication Challenges',
        category: 'language',
        description: 'Communication difficulties associated with autism spectrum disorder.',
        symptoms: ['Delayed language development', 'Echolalia', 'Difficulty with social communication'],
        assessment: ['ADOS', 'Communication assessment', 'Social communication evaluation'],
        treatment: ['Augmentative communication', 'Social skills training', 'Visual supports']
    },
    {
        id: 'tinnitus',
        name: 'Tinnitus',
        category: 'hearing',
        description: 'Perception of sound when no external sound is present, often described as ringing in the ears.',
        symptoms: ['Ringing', 'Buzzing', 'Hissing sounds in ears'],
        assessment: ['Audiological evaluation', 'Tinnitus matching', 'Questionnaires'],
        treatment: ['Sound therapy', 'Tinnitus retraining therapy', 'Cognitive behavioral therapy']
    }
    // Additional disorders can be added here
];
