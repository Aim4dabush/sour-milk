import React, { useState } from "react";

//styles
import "./GiftCard.scss";

//components
import GCThankYou from "./GCThankYou/GCThankYou";
import Purchase from "./Purchase/Purchase";
import Selection from "./Selection/Selection";

function GiftCard() {
  const [selectionMade, setSelectionMade] = useState(false);
  const [selection, setSelection] = useState("");
  const [purchaseMade, setPurchaseMade] = useState(false);

  return (
    <div className="gift-card">
      {!selectionMade && !purchaseMade ? (
        <Selection
          selection={selection}
          setSelectionMade={setSelectionMade}
          setSelection={setSelection}
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
