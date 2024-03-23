function finalValueAfterOperations(operations) {
    let value = 0;
    operations.forEach((op) => {
        if (op.startsWith("--")) {
            value = value - 1;
        }
        else if (op.startsWith("++")) {
            value = value + 1;
        }
        else if (op.endsWith("--")) {
            value = value - 1;
        }
        else if (op.endsWith("++")) {
            value = value + 1;
        }
    });
    return value;
}
export default finalValueAfterOperations;
