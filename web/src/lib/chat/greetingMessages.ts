/** Случайное приветствие на пустом экране чата (дефолтный ассистент). */
export const GREETING_MESSAGES = [
  "Чем могу помочь?",
  "Давайте начнём.",
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[
    Math.floor(Math.random() * GREETING_MESSAGES.length)
  ] as string;
}
