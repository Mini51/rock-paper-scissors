// This hook will calculate the winner
const options = [
  {
    name: "Rock",
    beats: "Scissors",
  },
  {
    name: "Paper",
    beats: "Rock",
  },
  {
    name: "Scissors",
    beats: "Rock",
  },
];

export function useCalculate(computerDecision: string, playerDecision: string) {
  console.log(
    `Computer picked: ${computerDecision}\nPlayer picked: ${playerDecision}`
  );

  // Calculate winner
  // Draw corner case
  if (computerDecision === playerDecision) {
    return "Draw";
  }

  const playerOption = options.find((option) => option.name === playerDecision);

  // Has player won?
  if (playerOption?.beats === computerDecision) {
    return "Win";
  }

  return "Lose";
}
