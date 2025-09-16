import React from "react";  

function CropYieldPage() {
  return (
    // <div style={{ background: "#e1d0d05d", minHeight: "90vh", padding: "40px 0" }}>
    <div style={{ background: "linear-gradient(120deg, #d8f9f05f 65%, #e0f5d2ff 100%)", minHeight: "90vh", padding: "40px 0" }}>
      <h1 style={{
        fontWeight: 700,
        margin: "0 0 1.5rem 5vw",
        display: "flex",
        alignItems: "center",
        fontSize: "2rem"
      }}>
        <span role="img" aria-label="seedling" style={{ fontSize: "2.2rem", marginRight: 12 }}>🌱</span>
        Crop Yield Predictor
      </h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 32,
        marginTop: 24
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 18,
          padding: "30px 2vw",
          boxShadow: "0 4px 24px #0001",
          flex: "1 1 320px",
          maxWidth: 440,
          minWidth: 280
        }}>
          <h2>Enter Farm Details</h2>
          <form>
            <input type="number" placeholder="Nitrogen (e.g. 10)" style={{ width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}/>
            <input type="number" placeholder="Phosphorus (e.g. 69)" style={{ width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}/>
            <input type="number" placeholder="Potassium (e.g. 78)" style={{ width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}/>
            <input type="number" step="0.1" placeholder="pH level (e.g. 5.6)" style={{ width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}/>
            <input type="number" placeholder="Rainfall (in mm)" style={{ width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}/>
            <select style={{width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}>
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Other">Other</option>
            </select>
            <select style={{width: "100%", margin: "8px 0", padding: 8, borderRadius: 7, border:'1px solid #eee' }}>
              <option value="">Select City</option>
              <option value="Pune">Pune</option>
              <option value="Other">Other</option>
            </select>
            <button
              type="button"
              style={{
                marginTop: 12,
                width: "100%",
                background: "#111",
                color: "#fff",
                border: 0,
                borderRadius: 7,
                padding: "10px 0",
                fontSize: 17,
                fontWeight: 500,
                cursor: "pointer",
                opacity: 0.9
              }}
              disabled
            >
              Predict
            </button>
          </form>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: 18,
          padding: "30px 2vw",
          boxShadow: "0 4px 24px #0001",
          flex: "1 1 320px",
          maxWidth: 440,
          minWidth: 280
        }}>
          <h2>Prediction Results</h2>
          <span style={{ fontWeight: 600 }}>Your suitable crop will appear here.</span>
        </div>
      </div>
    </div>
  );
}
export default CropYieldPage;
