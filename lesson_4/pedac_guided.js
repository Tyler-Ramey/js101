function calculateLeftoverBlocks (blocks) {
  let blocksLeft = blocks;
  let layer = 0;
  
  while (true) {
    layer += 1;
    let blockNeeded = layer * layer;
    
    if (blocksLeft < blockNeeded) break;
    
    blocksLeft -= blockNeeded;
  }
  
  return blocksLeft;
}

// console.log(calculateLeftoverBlocks(0) === 0); //true
//   console.log(calculateLeftoverBlocks(1) === 0); //true
//   console.log(calculateLeftoverBlocks(2) === 1); //true
//   console.log(calculateLeftoverBlocks(4) === 3); //true
//   console.log(calculateLeftoverBlocks(5) === 0); //true
//   console.log(calculateLeftoverBlocks(6) === 1); //true
//   console.log(calculateLeftoverBlocks(14) === 0); //true