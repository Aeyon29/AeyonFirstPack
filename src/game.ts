import { AeyonFirstPack } from '../metas/aeyonfirstpack/aeyonfirstpack'
import { ForRentSign } from '../metas/forrentsign/forrentsign'
import { SummerGallery } from '../metas/summergallery/summergallery'
import { AdSpinner } from '../metas/adspinner/adspinner'

const aeyonfirstpackLandOwnerData = {
  metadata: `
  {
    "phrase1": {
      "type": "phrase",
      "phrase": "Aeyon",
      "position": {"x":6,"y":3.1,"z":16},
      "scale": {"x":2,"y":2,"z":2},
      "rotation": {"x":0,"y":180,"z":0}
    },
    "phrase2": {
      "type": "phrase",
      "phrase": "First",
      "position": {"x":9,"y":2.6,"z":16},
      "scale": {"x":2,"y":2,"z":2},
      "rotation": {"x":0,"y":180,"z":0}
    },
    "phrase3": {
      "type": "phrase",
      "phrase": "Pack",
      "position": {"x":11.5,"y":3.3,"z":16},
      "scale": {"x":2,"y":2,"z":2},
      "rotation": {"x":0,"y":180,"z":0}
    },
    "fenceMetal1": {
      "type": "Fence_metal1",
      "position": {"x":2,"y":0,"z":15.5},
      "scale": {"x":3,"y":1,"z":1},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "fenceMetal2": {
      "type": "Fence_metal2",
      "position": {"x":5,"y":0,"z":15.5},
      "scale": {"x":3,"y":1,"z":1},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "fenceMetal3": {
      "type": "Fence_metal3",
      "position": {"x":8,"y":0,"z":15.5},
      "scale": {"x":3,"y":1,"z":1},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "fenceMetal4": {
      "type": "Fence_metal4",
      "position": {"x":11,"y":0,"z":15.5},
      "scale": {"x":3,"y":1,"z":1},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "fenceMetal5": {
      "type": "Fence_metal5",
      "position": {"x":14,"y":0,"z":15.5},
      "scale": {"x":3,"y":1,"z":1},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal1": {
      "type": "Ground_metal1",
      "position": {"x":2.5,"y":0,"z":13},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal2": {
      "type": "Ground_metal2",
      "position": {"x":5.5,"y":0,"z":13},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal3": {
      "type": "Ground_metal3",
      "position": {"x":8.5,"y":0,"z":13},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal4": {
      "type": "Ground_metal4",
      "position": {"x":11.5,"y":0,"z":13},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal5": {
      "type": "Ground_metal5",
      "position": {"x":14.5,"y":0,"z":13},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal6": {
      "type": "Ground_metal6",
      "position": {"x":2.5,"y":0,"z":10},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal7": {
      "type": "Ground_metal7",
      "position": {"x":5.5,"y":0,"z":10},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal8": {
      "type": "Ground_metal8",
      "position": {"x":8.5,"y":0,"z":10},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal9": {
      "type": "Ground_metal9",
      "position": {"x":11.5,"y":0,"z":10},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "groundMetal10": {
      "type": "Ground_metal10",
      "position": {"x":14.5,"y":0,"z":10},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "pillarMetal1": {
      "type": "Pillar_metal1",
      "position": {"x":0.5,"y":0,"z":15.5},
      "scale": {"x":3,"y":10,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "pillarMetal2": {
      "type": "Pillar_metal2",
      "position": {"x":0.5,"y":0,"z":13.5},
      "scale": {"x":3,"y":10,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "pillarMetal3": {
      "type": "Pillar_metal3",
      "position": {"x":0.5,"y":0,"z":11.5},
      "scale": {"x":3,"y":10,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "pillarMetal4": {
      "type": "Pillar_metal4",
      "position": {"x":0.5,"y":0,"z":9.5},
      "scale": {"x":3,"y":10,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "pillarMetal5": {
      "type": "Pillar_metal5",
      "position": {"x":0.5,"y":0,"z":5.5},
      "scale": {"x":3,"y":10,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "rampMetal1": {
      "type": "Ramp_metal1",
      "position": {"x":2.5,"y":0,"z":7},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "rampMetal2": {
      "type": "Ramp_metal2",
      "position": {"x":5.5,"y":0,"z":7},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "rampMetal3": {
      "type": "Ramp_metal3",
      "position": {"x":8.5,"y":0,"z":7},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "rampMetal4": {
      "type": "Ramp_metal4",
      "position": {"x":11.5,"y":0,"z":7},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "rampMetal5": {
      "type": "Ramp_metal5",
      "position": {"x":14.5,"y":0,"z":7},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "water1": {
      "type": "water",
      "position": {"x":2.5,"y":0,"z":4},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "lava1": {
      "type": "lava",
      "position": {"x":5.5,"y":0,"z":4},
      "scale": {"x":3,"y":0.5,"z":3},
      "rotation": {"x":0,"y":0,"z":0}
    },
    "folliage1": {
      "type": "folliage",
      "position": {"x":0.5,"y":3,"z":7.5},
      "scale": {"x":4,"y":4,"z":1},
      "rotation": {"x":0,"y":90,"z":0}
    }
  }
  `
}

/// --- Set up your meta system to test ---
//engine.addSystem(new AeyonFirstPack(null, aeyonfirstpackLandOwnerData))


const forrentsignLandOwnerData = {
  metadata: `
  {
    "meta": {
      "position": {"x":8, "y":0, "z":8},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":1, "y":1, "z":1}
    }
  }`
}

/// --- Set up your meta system to test ---
//engine.addSystem(new ForRentSign(null, forrentsignLandOwnerData))


const summergalleryLandOwnerData = {
  metadata: `
  {
    "summer": {
      "position": {"x":8, "y":0, "z":8},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":16, "y":9, "z":16}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new SummerGallery(null, summergalleryLandOwnerData))


const adspinnerLandOwnerData = {
  metadata: `
  {
    "spinner": {
      "position": {"x":8, "y":0, "z":8},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":1, "y":1, "z":1}
    }
  }`
}

/// --- Set up your meta system to test ---
//engine.addSystem(new AdSpinner(null, adspinnerLandOwnerData))
