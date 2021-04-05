// 1
/*const calculateDistance = (point1 = [0, 0], point2 = [3, 4]) => {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const lengthSection = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    return lengthSection;
};
calculateDistance();*/

// BEGIN
/*const calculateDistance = (point1, point2) => {
    const deltaX = point2[0] - point1[0];
    const deltaY = point2[1] - point1[1];

    return Math.sqrt((deltaX ** 2) + (deltaY ** 2));

    // Альтернативный вариант с использованием Math.hypot
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
    // return Math.hypot(deltaX, deltaY);
};

export default calculateDistance;*/
// END

// 2

// x = (x1 + x2) / 2 и y = (y1 + y2) / 2 - Средняя точка

/*const getMidpoint = (point1 = { x: -1, y: 10 },
                     point2 = { x: 0, y: -3 } ) => {

  /!*  const segment = { beginPoint: point1, endPoint: point2 };
    console.log(segment);*!/

    const gexX = (point1.x + point2.x) / 2;
    const gexY = (point1.y + point2.y) / 2;

    const result = {};
    result.x = gexX;
    result.y = gexY;

    console.log(gexX, gexY, result);

}
getMidpoint();*/

/*// BEGIN
export default (point1, point2) => {
    const x = (point1.x + point2.x) / 2;
    const y = (point1.y + point2.y) / 2;

    return { x, y };
};
// END*/

// 3

/*const makeSegment = (x, y) => {
    const point = { x, y };
    console.log(point);
    return point;
};
makeSegment(3, 2);*/

/*const getMidpointOfSegment = makeSegment(makeSegment(3, 2), makeSegment(0, 0));
getMidpointOfSegment(segment);*/

 const makeSegment = (firstPoint, lastPoint) => {
     const point = {firstPoint, lastPoint};
     console.log(point);
     return point; // получеам отрезок
};

/*const point = makeSegment(3, 2);
console.log(point)*/

 const getMidpointOfSegment = (myPoint) => { // получаем отрезок
     const { firstPoint, lastPoint } = myPoint;
     console.log(firstPoint, lastPoint);
     const a = (firstPoint.x + lastPoint.x) / 2;
     const b = (firstPoint.y + lastPoint.y) / 2;
     console.log(a, b); // 1.5, 1
};

 const getBeginPoint = (mySection) => {
     const value = makeSegment(mySection);
};

const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
};

const beginPoint = makeDecartPoint(3, 2);
console.log(beginPoint);

const endPoint = makeDecartPoint(0, 0);
console.log(endPoint);

const segment = makeSegment(beginPoint, endPoint);

//const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(0, 0));

const x = getMidpointOfSegment(segment); // 1.5, 1
const test = getBeginPoint(segment);

/*


 export const makeSegment = (x, y) => {
    const point = { x, y };
    return point;
};

export const getMidpointOfSegment = (myPoint) => {
    const midFirstPoint = (myPoint.x) / 2;
    const midSecondPoint = (myPoint.y) / 2;
    const result = {};
    result.x = midFirstPoint;
    result.y = midSecondPoint;
     console.log(result);
    return result;
};
const point = makeSegment(3, 2);

const getXpoint = (point) => point.x; // firstPoint

const getYpoint = (point) => point.y; // secondPoint

const x = getMidpointOfSegment(point);

export const getBeginPoint = (mySection) => {
    const beginPoint = getXpoint(mySection);
     console.log(beginPoint);
    return beginPoint;
};
const beginPoint = getBeginPoint(point);

export const getEndPoint = (mySection) => {
    const endPoint = getYpoint(mySection);
     console.log(endPoint);
    return endPoint;
}
const endPoint = getEndPoint(point);
**/













































