import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToExcel = (data) => {
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), "Data");
  XLSX.writeFile(wb, "form-data.xlsx");
};

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.text("Form Data", 10, 10);
  const headers = [
    [
      "Name",
      "Number",
      "Email",
      "Password",
      "Confirm Password",
      "Skill",
      "Skills",
      "Gender",
    ],
  ];
  const rows = data.map((item) => [
    item.name,
    item.number,
    item.email,
    item.Password,
    item.confirmPassword,
    item.skill.join(" , "),
    item.skills.join(" , "),
    item.gender,
  ]);
  autoTable(doc, {
    head: headers,
    body: rows,
    startY: 20,
    headStyles: {
      fillColor: [0, 0, 0],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      cellPadding: { top: 4, right: 0, bottom: 4, left: 0 },
      fontSize: 10,
      halign: "left",
      valign: "middle",
    },
  });
  doc.save("form-data.pdf");
};
