import React, { useState } from "react";

//styles
import "./GiftCard.scss";

//components
import GCThankYou from "./GCThankYou/GCThankYou";
import Purchase from "./Purchase/Purchase";
import Selection from "./Selection/Selection";

function GiftCard() {
  const [purchaseMade, setPurchaseMade] = useState(false);
  const [selectionMade, setSelectionMade] = useState(false);
  const [selection, setSelection] = useState("");

  return (
    <div className="gift-card">
      {!selectionMade && !purchaseMade ? (
        <Selection
          setSelection={setSelection}
          setSelectionMade={setSelectionMade}
        />
      ) : null}
      {selection && !purchaseMade ? (
        <Purchase
          selection={selection}
          setPurchaseMade={setPurchaseMade}
          setSelectionMade={setSelectionMade}
        />
      ) : null}
      {purchaseMade && (
        <GCThankYou
          selection={selection}
          setPurchaseMade={setPurchaseMade}
          setSelectionMade={setSelectionMade}
        />
      )}
    </div>
  );
}

export default GiftCard;
