import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState(Data);
  return (
    <>
      <main className="py-5">
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form setData={setData} />
          <Table data={data} />
          <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
export function Form({ setData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { ...getFormData(e.target), id: crypto.randomUUID() };
    setData((prev) => [...prev, info]);
    e.target.reset();
  };

  const getFormData = (form) => {
    const formData = new FormData(form);
    const dataGet = {};
    for (const [key, value] of formData.entries()) {
      dataGet[key] = value;
    }
    return dataGet;
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export function Table({ data }) {
  return (
    <>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, title, category, amount }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{category}</td>
              <td>RS. {amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>RS.8100</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export const Data = [
  {
    id: crypto.randomUUID(),
    title: "Milk",
    category: "Grocery",
    amount: "40",
  },
  {
    id: crypto.randomUUID(),
    title: "Shirt",
    category: "Clothes",
    amount: "600",
  },
  {
    id: crypto.randomUUID(),
    title: "Vegetables",
    category: "Grocery",
    amount: "100",
  },
  {
    id: crypto.randomUUID(),
    title: "Electricity Bill",
    category: "Bills",
    amount: "1100",
  },
  //   {
  //     id: Crypto.randomUUID(),
  //     title: "Total",
  //     category: "",
  //     amount: "8100",
  //   },
];
