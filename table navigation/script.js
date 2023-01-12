let t = document.body.firstElementChild.firstElementChild
console.log(t.rows); // collection of tr elements
console.log(t.tHead); // referrence to <thead>
console.log(t.tFoot); // referrence to <tfoot>
console.log(t.tBodies); // collection of <tbody> elements
console.log(t.tBodies.rows); // collection of <tr> inside
console.log(t.rows[0].cells); // collection of <td> & <th>
console.log(t.rows[1].cells); 
console.log(t.rows[1].sectionRowIndex); // index of tr inside enclosing element
console.log(t.rows[1].rowIndex); // row number starting from 0
console.log(t.rows[1].cells[1].cellIndex); // no of cells inside enclosing <tr>