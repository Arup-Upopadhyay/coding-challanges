function interpret(command) {
    return command
        .split("G")
        .join("G")
        .split("()")
        .join("o")
        .split("(al)")
        .join("al");
}
export default interpret;
