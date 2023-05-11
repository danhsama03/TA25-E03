import { question } from "readline-sync";

class Point2D {
    // Khai báo thuộc tính của đối tượng
    private xPoint: number;
    private yPoint: number;

    /**
     * Phương thức khởi tạo một đối tượng thuộc lớp Point2D
     * @param x Hoành độ
     * @param y Tung độ
     */
    constructor(x: number = 0, y: number = 0) {
        this.xPoint = x;
        this.yPoint = y;
    }

    /**
     * Phương thức nhập tọa độ điểm
     */
    public scan(): void {
        this.xPoint = Number(question("Nhap hoanh do x: "));
        this.yPoint = Number(question("Nhap tung do y: "));
    }

    /**
     * Phương thức in tọa độ điểm
     */
    public print(): void {
        console.log("Toa do cua diem la: " + this.xPoint + ", " + this.yPoint);
    }

    /**
     * Phương thức lấy hoành độ của điểm
     * @returns Hoành độ
     */
    public getX(): number {
        return this.xPoint;
    }

    /**
     * Phương thức cập nhật hoành độ
     * @param value Hoành độ mới
     */
    public setX(value: number): void {
        this.xPoint = value;
    }

    /**
     * Phương thức lấy tung độ
     * @returns Tung độ
     */
    public getY(): number {
        return this.yPoint;
    }

    /**
     * Phương thức cập nhật tung độ
     * @param value Tung độ mới
     */
    public setY(value: number): void {
        this.yPoint = value;
    }

    /**
     * Phương thức di chuyển điểm đến vị trí mới
     * @param dx Độ dời theo chiều ngang
     * @param dy Độ dời theo chiều dọc
     */
    public move(dx: number, dy: number): void {
        this.xPoint += dx;
        this.yPoint += dy;
    }

    /**
     * Phương thức tính khoảng cách đến một điểm khác
     * @param point Điểm cần được tính khoảng cách đến
     * @returns Khoảng cách
     */
    public getDistance(point: Point2D): number {
        const dx = this.xPoint - point.xPoint;
        const dy = this.yPoint - point.yPoint;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

export {Point2D};