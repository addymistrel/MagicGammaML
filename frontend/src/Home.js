import logo from "./logo.svg";
import "./form.css";
import axios from "axios";

function Home() {
  const djangoUrl = "http://127.0.0.1:8000/";

  const handlePredict = async () => {
    const out = await axios
      .post(djangoUrl + "predict/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <form>
          <input
            id="input-1"
            type="number"
            placeholder="Example - 28.796"
            step="0.001"
            required
            autofocus
          />
          <label for="input-1">
            <span class="label-text">fLength</span>
            <span class="nav-dot"></span>
            <div class="signup-button-trigger">Make Prediction</div>
          </label>
          <input
            id="input-2"
            type="number"
            step="0.001"
            placeholder="Example - 28.796"
            required
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
          />
          <label for="input-10">
            <span class="label-text">fDist</span>
            <span class="nav-dot"></span>
          </label>
          <button type="submit" onClick={handlePredict}>
            Predict Now
          </button>
          <p class="tip">Press Tab</p>
          <div class="signup-button">Make Prediction</div>
        </form>
      </div>
    </>
  );
}

export default Home;
