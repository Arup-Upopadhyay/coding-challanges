function maxWidthOfVerticalArea(points) {
    let max = 0;
    const xAxisIsSorted = points.map(point => point[0]).sort((a, b) => a - b);
    for (let pos = 1; pos < xAxisIsSorted.length; pos++) {
        max = Math.max(max, xAxisIsSorted[pos] - xAxisIsSorted[pos - 1]);
    }
    return max;
}
export default maxWidthOfVerticalArea;
