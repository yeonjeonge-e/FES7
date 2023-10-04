import React from 'react'

export default function ListItem({item}) {
  // item에는 name과 price 라는 값 두개가 있음
  return (
    <div>
      {/* 한줄의 칸(행)을 의미하는 것 - row */}
      <tr>
        <th>name : {item.name}</th>
        <td>₩ {item.price}</td>
      </tr>
    </div>
  )
}
