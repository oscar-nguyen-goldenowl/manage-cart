import React, { Component } from 'react';
import "./detail.css";

class ProductDetail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="row">
                    <div className="col-sm-5">
                        <img src="/images/thoitrang/may-duoi-con-trung.jpg" alt="oscar"/>
                    </div>
                    <div className="col-sm-7">
                        <h2>Tên sản phẩm</h2>
                        <hr className="my-4"/>
                        <p>Price : $600</p>
                        <ul className="description">
                            <li>Sản phẩm Chính hãng, Mới 100%, Nguyên seal, Chưa Active</li>
                            <li>Miễn phí giao hàng tiêu chuẩn toàn quốc</li>
                            <li>Màn hình: 6.2 inch (Màn hình siêu tràn), HD+</li>
                            <li>Camera Trước: 8 MP (Hỗ trợ công nghệ A.I)</li>
                            <li>Camera Sau: 13 MP + 2 MP (Camera kép)</li>
                            <li>CPU: Quacolmm SDM 450 8 nhân, 1.8GHz</li>
                            <li>Bộ Nhớ: 16GB</li>
                            <li>RAM: 2GB</li>
                            <li>SIM: 2 Nano SIM</li>
                            <li>Tính năng: Chụp ảnh làm đẹp bằng trí tuệ nhân tạo, Chụp ảnh xóa phông, Mở khóa nhận diện khuôn mặt</li>
                        </ul>
                        <hr className="my-4"/>
                        <div className="amount">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                                        <button className="btn btn-info mr-2" style={{width: 40}}>-</button>
                                        <input className="form-control" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                                        <button className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                                        <button className="btn btn-warning ml-4">Mua</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;