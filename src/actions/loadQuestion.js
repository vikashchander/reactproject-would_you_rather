export const All_QUESTIONS = "LOAD_QUESTIONS";

export function allQuestions(questions) {
    return { type: All_QUESTIONS, payload: questions };
}