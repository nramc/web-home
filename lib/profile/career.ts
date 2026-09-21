const careerStartYear = 2013
const careerStartMonth = 0

export function getExperienceYears(asOf = new Date()) {
    const startOfCurrentYear = new Date(asOf.getFullYear(), careerStartMonth, 1)
    const years = asOf.getFullYear() - careerStartYear

    return Math.max(0, years - (asOf < startOfCurrentYear ? 1 : 0))
}

export function getExperienceLabel(asOf = new Date()) {
    return `${getExperienceYears(asOf)}+`
}
