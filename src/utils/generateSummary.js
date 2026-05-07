const costMap = {
  marble: "High",
  granite: "High",
  stone: "High",
  leather: "High",
  glass: "Medium",
  wood: "Medium",
  fabric: "Medium",
  carpet: "Medium",
  gloss: "Medium",
  tile: "Low",
  laminate: "Low",
  paint: "Low",
  matte: "Low",
  concrete: "Low",
  warm: "Low",
  cool: "Low",
  single: "Low",
  queen: "Medium",
  king: "High",
};

const darkMaterials = ["marble", "stone", "granite", "concrete", "matte"];

export function getCostTier(material) {
  return costMap[material] || "Medium";
}

export function generateSummary(room, selections, allCategories) {
  if (!room) return null;

  const selectedEntries = Object.entries(selections).filter(([, v]) => v);
  const missingCategories = allCategories.filter((cat) => !selections[cat]);

  const costs = selectedEntries.map(([cat, mat]) => ({
    category: cat,
    material: mat,
    cost: getCostTier(mat),
  }));

  const costCounts = { High: 0, Medium: 0, Low: 0 };
  costs.forEach(({ cost }) => costCounts[cost]++);
  const overallCost =
    costCounts.High > 0
      ? "High"
      : costCounts.Medium > 0
      ? "Medium"
      : "Low";

  const warnings = [];

  const flooring = selections["Flooring"];
  const wallFinish = selections["Wall Finish"];
  if (
    flooring &&
    wallFinish &&
    darkMaterials.includes(flooring) &&
    darkMaterials.includes(wallFinish)
  ) {
    warnings.push(
      "⚠️ Both flooring and wall finish are dark materials — the room may feel enclosed or dim."
    );
  }

  const hasLightingCategory = allCategories.includes("Lighting");
  if (hasLightingCategory && !selections["Lighting"]) {
    warnings.push(
      "⚠️ No lighting selected — good lighting dramatically impacts ambiance and mood."
    );
  }

  const highCostCount = costs.filter((c) => c.cost === "High").length;
  if (highCostCount >= 2) {
    warnings.push(
      "⚠️ Multiple high-cost materials selected — consider mixing with budget options to manage costs."
    );
  }

  const recommendations = [];

  if (missingCategories.length > 0) {
    recommendations.push(
      `💡 Complete your selection by choosing: ${missingCategories.join(", ")}.`
    );
  }

  const darkCount = selectedEntries.filter(([, mat]) =>
    darkMaterials.includes(mat)
  ).length;
  const lightCount = selectedEntries.length - darkCount;
  if (darkCount > lightCount && selectedEntries.length > 1) {
    recommendations.push(
      "💡 Consider balancing dark materials with lighter finishes to keep the space open and airy."
    );
  }

  if (selections["Lighting"] === "cool") {
    recommendations.push(
      "💡 Cool lighting pairs well with modern, minimalist styles — consider sleek finishes like gloss or glass."
    );
  }
  if (selections["Lighting"] === "warm") {
    recommendations.push(
      "💡 Warm lighting enhances natural materials like wood, fabric, and stone beautifully."
    );
  }

  if (overallCost === "High" && missingCategories.length === 0) {
    recommendations.push(
      "💡 Premium selections across the board — ensure your budget accounts for installation and finishing costs."
    );
  }

  const allMaterials = Object.values(selections).filter(Boolean);
  let styleGuess = "Contemporary";
  if (allMaterials.includes("marble") || allMaterials.includes("granite")) {
    styleGuess = "Luxury / High-End";
  } else if (allMaterials.includes("wood") && allMaterials.includes("fabric")) {
    styleGuess = "Scandinavian / Warm Natural";
  } else if (allMaterials.includes("concrete") || allMaterials.includes("gloss")) {
    styleGuess = "Industrial / Modern";
  } else if (allMaterials.includes("tile") && allMaterials.includes("paint")) {
    styleGuess = "Classic / Clean";
  }

  return {
    room,
    selectedItems: costs,
    overallCost,
    costCounts,
    styleGuess,
    warnings,
    recommendations,
    missingCategories,
    isComplete: missingCategories.length === 0,
  };
}
