export function getJobLevels() {
    return {
        INTERNSHIP: "Internship",
        ENTRY: "Entry Level",
        MID: "Mid Level",
        SENIOR: "Senior Level"
    }
}

export function getDifficultyLevels() {
    return {
        EASY: "Easy",
        MEDIUM: "Medium",
        HARD: "Hard"
    }
}

export function getQuestionTypes() {
    return {
        PRACTICAL: "Practical",
        THEORETICAL: "Theoretical"
    }
}

export function getArchetipes() {
    return {
        ...getQuestionTypes(),
        SPECIALIST: "Specialist"
    }
}

export function getLanguageLevels() {
    return {
        BASIC: "Basic",
        INTERMEDIATE: "Intermediate",
        ADVANCED: "Advanced",
        FLUENT: "Fluent",
        NATIVE: "Native"
    }
}

export function getDegreeTypes() {
    return {
        BACHELORS: "Bachelors",
        ASSOCIATE: "Associate",
        MASTERS: "Masters",
        DOCTORAL: "Doctoral"
    }
}

export function getColors() {
    return [
        "#916932",
        "#D48E29",
        "#EC5A46",
        "#E15263",
        "#DF5193",
        "#D59AC5",
        "#8D55A2",
        "#18A2C6",
        "#0288AD",
        "#2B9446",
        "#83C341"
    ]
}