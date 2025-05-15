import jsPDF from "jspdf";
import React from "react";
import autoTable from "jspdf-autotable";

function Table() {
  return (
    <>
      <table id="my-table" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={exportTableToPDF} class="btn btn-primary">
        Primary
      </button>
    </>
  );
}

export default Table;

export const exportTableToPDF = () => {
  const doc = new jsPDF();
  autoTable(doc, { html: "#my-table" }); // uses the table directly
  doc.save("table-data.pdf");
};
