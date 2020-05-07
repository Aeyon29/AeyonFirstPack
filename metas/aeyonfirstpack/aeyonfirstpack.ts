
export class AeyonFirstPack implements ISystem {
  META_ID = 0

  api = null
  host = null

  // Library of assets
  library = {
    'Fence_metal1': {
      src: 'metas/aeyonfirstpack/models/Fence_metal1.glb',
      model: null,
      scaleX: 0.5,
      scaleY: 1,
      scaleZ: 1
    },
    'Fence_metal2': {
      src: 'metas/aeyonfirstpack/models/Fence_metal2.glb',
      model: null,
      scaleX: 0.5,
      scaleY: 1,
      scaleZ: 1
    },
    'Fence_metal3': {
      src: 'metas/aeyonfirstpack/models/Fence_metal3.glb',
      model: null,
      scaleX: 0.5,
      scaleY: 1,
      scaleZ: 1
    },
    'Fence_metal4': {
      src: 'metas/aeyonfirstpack/models/Fence_metal4.glb',
      model: null,
      scaleX: 0.5,
      scaleY: 1,
      scaleZ: 1
    },
    'Fence_metal5': {
      src: 'metas/aeyonfirstpack/models/Fence_metal5.glb',
      model: null,
      scaleX: 0.5,
      scaleY: 1,
      scaleZ: 1
    },
    'Ground_metal1': {
      src: 'metas/aeyonfirstpack/models/Ground_metal1.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal2': {
      src: 'metas/aeyonfirstpack/models/Ground_metal2.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal3': {
      src: 'metas/aeyonfirstpack/models/Ground_metal3.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal4': {
      src: 'metas/aeyonfirstpack/models/Ground_metal4.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal5': {
      src: 'metas/aeyonfirstpack/models/Ground_metal5.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal6': {
      src: 'metas/aeyonfirstpack/models/Ground_metal6.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal7': {
      src: 'metas/aeyonfirstpack/models/Ground_metal7.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal8': {
      src: 'metas/aeyonfirstpack/models/Ground_metal8.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal9': {
      src: 'metas/aeyonfirstpack/models/Ground_metal9.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ground_metal10': {
      src: 'metas/aeyonfirstpack/models/Ground_metal10.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Pillar_metal1': {
      src: 'metas/aeyonfirstpack/models/Pillar_metal1.glb',
      model: null,
      scaleX: 0.4,
      scaleY: 0.1,
      scaleZ: 0.4
    },
    'Pillar_metal2': {
      src: 'metas/aeyonfirstpack/models/Pillar_metal2.glb',
      model: null,
      scaleX: 0.4,
      scaleY: 0.1,
      scaleZ: 0.4
    },
    'Pillar_metal3': {
      src: 'metas/aeyonfirstpack/models/Pillar_metal3.glb',
      model: null,
      scaleX: 0.4,
      scaleY: 0.1,
      scaleZ: 0.4
    },
    'Pillar_metal4': {
      src: 'metas/aeyonfirstpack/models/Pillar_metal4.glb',
      model: null,
      scaleX: 0.4,
      scaleY: 0.1,
      scaleZ: 0.4
    },
    'Pillar_metal5': {
      src: 'metas/aeyonfirstpack/models/Pillar_metal5.glb',
      model: null,
      scaleX: 0.4,
      scaleY: 0.1,
      scaleZ: 0.4
    },
    'Ramp_metal1': {
      src: 'metas/aeyonfirstpack/models/Ramp_metal1.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ramp_metal2': {
      src: 'metas/aeyonfirstpack/models/Ramp_metal2.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ramp_metal3': {
      src: 'metas/aeyonfirstpack/models/Ramp_metal3.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ramp_metal4': {
      src: 'metas/aeyonfirstpack/models/Ramp_metal4.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'Ramp_metal5': {
      src: 'metas/aeyonfirstpack/models/Ramp_metal5.glb',
      model: null,
      scaleX: 0.25,
      scaleY: 1,
      scaleZ: 0.25
    },
    'water': {
      src: 'metas/aeyonfirstpack/models/Water1.glb',
      model: null,
      scaleX: 0.48982,
      scaleY: 1,
      scaleZ: 0.48982
    },
    'lava': {
      src: 'metas/aeyonfirstpack/models/Lava1.glb',
      model: null,
      scaleX: 0.48982,
      scaleY: 1,
      scaleZ: 0.48982
    },
    'folliage': {
      src: 'metas/aeyonfirstpack/models/Folliage1.glb',
      model: null,
      scaleX: 0.006,
      scaleY: 0.006,
      scaleZ: 0.006
    },
    'phrase': {
      src: '',
      model: null,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1
    }
  }

  // List of loaded items as key value pairs
  items = {}

  // List of loaded letters as key value pairs
  letters = {}
  phrase: string = ''

  /**
   * Initial scene setup, create all objects in the constructor.
   *
   * @param api          Used to call MetaZone API endpoints.
   * @param host_data    Very first
   */
  constructor(api, host_data) {
    // Save api
    this.api = api;


    // Note: your initial loading code goes here


    // Initial host data
    this.refreshHost(host_data)
  }

  /**
   * A Decentraland provided function where you should put your code that
   * repeats over and over.
   *
   * @param dt     Delta time since last update
   */
  update(dt: number) {
    // Note: your code that repeats goes here
  }

  /**
   * A MetaZone provided function that contains data customized by the
   * landowner on the MetaZone.io system. This gets called every minute when it
   * is deployed live. During testing its called once in the game.ts file.
   *
   * @param host_data    Data sent from the MetaZone backend to update your Meta
   */
  refreshHost(host_data) {
    // Save host info
    this.host = host_data

    // Parse metadata
    if(this.host.metadata) {
      let metadata = JSON.parse(this.host.metadata)

      // Loop through each asset
      const keys = Object.keys(metadata)
      for(let i=0; i<keys.length; i++) {
        // Retrieve asset
        let metaItem = metadata[keys[i]];

        // Retrieve existing item
        if(this.items.hasOwnProperty(keys[i])) {
          log('Update Asset: ',metaItem)

          // Retrieve existing entity
          let itemEntity = this.items[keys[i]]
          // Position
          itemEntity.getComponent(Transform).position.set(metaItem.position.x,metaItem.position.y,metaItem.position.z)
          // Rotation
          itemEntity.getComponent(Transform).rotation.setEuler(metaItem.rotation.x,metaItem.rotation.y+180,metaItem.rotation.z)
          // Scale
          itemEntity.getComponent(Transform).scale.set(metaItem.scale.x * this.library[metaItem.type].scaleX,metaItem.scale.y * this.library[metaItem.type].scaleY,metaItem.scale.z * this.library[metaItem.type].scaleZ)
        }
        // Create new phrase item
        else if(metaItem.type == 'phrase') {
          log('Create Phrase: ',metaItem.phrase)
          // Store as key value pair
          this.items[keys[i]] = this.loadPhrase(metaItem, metaItem.phrase)
        }
        // Create new asset item
        else if(this.library.hasOwnProperty(metaItem.type)) {
          log('Create Asset: ',metaItem)

          // No 3d model loaded yet
          if(!this.library[metaItem.type].model) {
            // Load the 3d model to asset library
            this.library[metaItem.type].model = new GLTFShape(this.library[metaItem.type].src)
          }

          // Create item
          let itemEntity = new Entity()
          itemEntity.addComponent(new Transform({
            position: new Vector3(metaItem.position.x,metaItem.position.y,metaItem.position.z),
            rotation: Quaternion.Euler(metaItem.rotation.x,metaItem.rotation.y+180,metaItem.rotation.z),
            scale: new Vector3(metaItem.scale.x * this.library[metaItem.type].scaleX,metaItem.scale.y * this.library[metaItem.type].scaleY,metaItem.scale.z * this.library[metaItem.type].scaleZ)
          }))
          itemEntity.addComponent(this.library[metaItem.type].model)
          engine.addEntity(itemEntity)

          // Store as key value pair
          this.items[keys[i]] = itemEntity
        }
      }

    }

  }
  loadPhrase(metaItem, phrase: string) {
    // Create item
    let itemEntity = new Entity()
    itemEntity.addComponent(new Transform({
      position: new Vector3(metaItem.position.x, metaItem.position.y, metaItem.position.z),
      rotation: Quaternion.Euler(metaItem.rotation.x, metaItem.rotation.y+180, metaItem.rotation.z),
      scale: new Vector3(metaItem.scale.x * this.library[metaItem.type].scaleX, metaItem.scale.y * this.library[metaItem.type].scaleY, metaItem.scale.z * this.library[metaItem.type].scaleZ)
    }))
    engine.addEntity(itemEntity)

    // Letter spacing
    let spacing = 0.3
    // Loop through each phrase letter
    for(let i=0; i<phrase.length; i++) {
      // Retrieve letter
      let char = phrase.charAt(i)
      let entity = new Entity()
      // Retrieve 3D model from list
      entity.addComponent(this.getLetter(char))
      entity.addComponent(new Transform({
        // Space out each letter, then center it
        position: new Vector3(i*spacing - (spacing * phrase.length)/2, 0, 0),
        rotation: Quaternion.Euler(0, 180, 0)
      }))
      entity.setParent(itemEntity)
      //log('Letter '+char)
    }
    // Save current phrase
    this.phrase = phrase

    return itemEntity
  }
  getLetter(char: string) {
    // Letter does not exist
    if(!this.letters.hasOwnProperty(char)) {
      // Create a new letter
      this.letters[char] = new GLTFShape('metas/aeyonfirstpack/models/'+char.toUpperCase()+'.glb')
    }
    // Return the requested letter
    return this.letters[char]
  }

}
