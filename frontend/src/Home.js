import "./form.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  const djangoUrl = "http://127.0.0.1:8000/";

  const [data, setData] = useState({
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
  });

  const handlePredict = async () => {
    if (
      data.f1.length === 0 ||
      data.f2.length === 0 ||
      data.f3.length === 0 ||
      data.f4.length === 0 ||
      data.f5.length === 0 ||
      data.f6.length === 0 ||
      data.f7.length === 0 ||
      data.f8.length === 0 ||
      data.f9.length === 0 ||
      data.f10.length === 0
    ) {
      alert("Please Fill all the Reuired Fields.");
    } else {
      const out = await axios
        .post(djangoUrl + "predict/", data)
        .then((res) => {
          console.log(res.data);
          navigate("/machine", {
            state: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(data);
  return (
    <div>
      <button autoFocus="true">Magic Gamma Telescope Predictor (Press Tab)</button>
      <input
        id="input-1"
        type="number"
        placeholder="Example - 28.796"
        step="0.001"
        required
        autoFocus="true"
        onChange={(e) => setData({ ...data, f1: e.target.value })}
      />
      <label for="input-1">
        <span class="label-text">fLength</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-2"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f2: e.target.value })}
      />
      <label for="input-2">
        <span class="label-text">fWidth</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-3"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f3: e.target.value })}
      />
      <label for="input-3">
        <span class="label-text">fSize</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-4"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f4: e.target.value })}
      />
      <label for="input-4">
        <span class="label-text">fConc</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-5"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f5: e.target.value })}
      />
      <label for="input-5">
        <span class="label-text">fConc1</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-6"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f6: e.target.value })}
      />
      <label for="input-6">
        <span class="label-text">fAsym</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-7"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f7: e.target.value })}
      />
      <label for="input-7">
        <span class="label-text">fM3Long</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-8"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f8: e.target.value })}
      />
      <label for="input-8">
        <span class="label-text">fM3Trans</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-9"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f9: e.target.value })}
      />
      <label for="input-9">
        <span class="label-text">fAlpha</span>
        <span class="nav-dot"></span>
      </label>
      <input
        id="input-10"
        type="number"
        step="0.001"
        placeholder="Example - 28.796"
        required
        onChange={(e) => setData({ ...data, f10: e.target.value })}
      />
      <label for="input-10">
        <span class="label-text">fDist</span>
        <span class="nav-dot"></span>
      </label>
      <p class="tip">Press Tab</p>
      <button onClick={handlePredict}>Predict Now</button>
    </div>
  );
}

export default Home;
