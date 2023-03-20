// This hook will generate a action by the computer

const useComputer = (options: string[]) => {
  // Gen random number
  const rand = Math.floor(Math.random() * options.length);

  // Assign value
  const computerDecision = options[rand];

  return computerDecision;
};

export default useComputer;
