import { useState } from "react";

function AddService() {
    const [formData, setFormData] = useState({ name: '', price: '', image: null });

    const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === 'image') {
    setFormData((prev) => ({ ...prev, image: files[0] }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData();
  data.append('name', formData.name);
  data.append('price', formData.price);
  data.append('image', formData.image);

  const res = await fetch('http://localhost:5000/api/services/addservice', {
    method: 'POST',
    body: data,
  });

  const result = await res.json();
  alert(result.message);
};

  return (
    <div className="mt-[300px]">
      <form onSubmit={handleSubmit}>
    <input name="name" onChange={handleChange} required />
    <input type='number' name="price" onChange={handleChange} required />
    <input type="file" name="image" accept="image/*" onChange={handleChange} required />
    <button type="submit">Upload</button>
  </form>
    </div>
  )
}

export default AddService
