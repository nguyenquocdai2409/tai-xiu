import React from 'react'

export default function KetQua({luaChon, soBanThang, soLuotChoi}) {
  return (
    <div className='pt-5'>
        <h3>Bạn Chọn : {luaChon}</h3>
        <h3>Số Bàn Lần Thắng : {soBanThang}</h3>
        <h3>Số lần bạn chơi : {soLuotChoi}</h3>
    </div>
  )
}
