import { Circle } from "./circle";
import { Point2D } from "./point2d";

// Lưu ý: Hàm nào không cần test thì comment lại.

// Sử dụng Point2D
function mainPoint() {
    // Khởi tạo đối tượng mới
    const p1: Point2D = new Point2D();

    // Test thử hàm scan
    // p1.scan();
    
    // Test thử hàm print
    // p1.print();

    // Test thử hàm get set, get
    // console.log("Truoc khi set: ");
    // p1.print();
    // p1.setX(1);
    // p1.setY(-1);
    // console.log("Sau khi set: ");
    // console.log("x =", p1.getX());
    // console.log("y =", p1.getY());
    
    // Test thử hàm move
    // p1.scan();
    // p1.move(2, 3);
    // p1.print();

    // Test thử hàm getDistance
    // p1.scan();
    // const p2: Point2D = new Point2D(4, 5);
    // p2.print();
    // console.log(p1.getDistance(p2));
};

// Sử dụng Circle
function mainCircle() {
    // Khởi tạo đối tượng mới
    const center: Point2D = new Point2D(0, 0);
    const circle: Circle = new Circle(center, 3);
    
    // Test thử hàm scan
    // circle.scan();
    
    // Test thử hàm print
    // circle.print();

    // Test thử hàm get set, get
    // console.log("Truoc khi set: ");
    // circle.print();
    // circle.setRadius(3);
    // circle.setCenter(new Point2D(6, 9));
    // console.log("Sau khi set: ");
    // circle.getCenter().print();
    // console.log("R =", circle.getRadius());
    
    // Test thử hàm move
    // circle.scan()
    // circle.move(2, 3);
    // console.log("Hinh tron sau khi di chuyen: ");
    // circle.print();

    // Test thử hàm getArea
    const s = circle.getArea();
    console.log(`Dien tich hinh tron la: ` + s);
}

// mainPoint();
mainCircle();
