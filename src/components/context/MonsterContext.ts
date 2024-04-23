
import { createContext } from "react"
import { Action } from "./MonsterProvider";
import uuid from "react-uuid";

export type Monster = {
    id: string
    first_name: string;
    last_name: string;
    description: string;
    abilities: {
      science: string[];
      magic: string[];
    };
    origin: string;
    num_eyes: number;
    num_horns?: number;
    num_arms?: number;
    num_wings?: number;
    num_tentacles?: number;
    num_mouths?: number;
    num_tails?: number;
  };

export type MonsterState = {
    monsters: Monster[]
    editMode: boolean
}

export const initialMonsterState: MonsterState = {
    monsters: [
        {
          "id": uuid(),
          "first_name": "Fuzzy",
          "last_name": "Sparklehorn",
          "description": "A fluffy monster with rainbow-colored fur and sparkling horns.",
          "abilities": {
            "science": ["Electrokinesis", "Inventing gadgets"],
            "magic": ["Light manipulation", "Teleportation"]
          },
          "origin": "Cloudtopia",
          "num_horns": 2,
          "num_eyes": 4,
          "num_arms": 2
        },
        {
          "id": uuid(),
          "first_name": "Whiskers",
          "last_name": "Glimmerscale",
          "description": "A winged monster with iridescent scales and shimmering eyes.",
          "abilities": {
            "science": ["Aerodynamics", "Engineering"],
            "magic": ["Illusions", "Flight spells"]
          },
          "origin": "Skyhaven",
          "num_wings": 2,
          "num_eyes": 3,
          "num_arms": 2
        },
        {
          "id": uuid(),
          "first_name": "Squiggle",
          "last_name": "Tentapuff",
          "description": "A squid-like monster with a puffy body and tentacles covered in soft fuzz.",
          "abilities": {
            "science": ["Bioluminescence research", "Hydrodynamics"],
            "magic": ["Water manipulation", "Ink spells"]
          },
          "origin": "Aqualantis",
          "num_tentacles": 8,
          "num_eyes": 2,
          "num_mouths": 1
        },
        {
          "id": uuid(),
          "first_name": "Blaze",
          "last_name": "Emberclaw",
          "description": "A fiery monster with flaming mane and ember-covered claws.",
          "abilities": {
            "science": ["Pyrotechnics", "Thermodynamics"],
            "magic": ["Fire manipulation", "Heat spells"]
          },
          "origin": "Infernia",
          "num_horns": 1,
          "num_eyes": 2,
          "num_arms": 2,
          "num_tails": 1
        },
        {
          "id": uuid(),
          "first_name": "Misty",
          "last_name": "Moonwing",
          "description": "An ethereal monster with translucent wings and a glowing aura.",
          "abilities": {
            "science": ["Astronomy", "Optics"],
            "magic": ["Moonlight manipulation", "Dreamweaving"]
          },
          "origin": "Lunaria",
          "num_wings": 4,
          "num_eyes": 2,
          "num_arms": 2
        },
        {
          "id": uuid(),
          "first_name": "Giggles",
          "last_name": "Snugglepuff",
          "description": "A cuddly monster with soft fur and an infectious laugh.",
          "abilities": {
            "science": ["Psychology", "Sensory studies"],
            "magic": ["Emotion manipulation", "Healing spells"]
          },
          "origin": "Joyville",
          "num_eyes": 2,
          "num_arms": 2,
          "num_tails": 1
        },
        {
          "id": uuid(),
          "first_name": "Spike",
          "last_name": "Razorclaw",
          "description": "A spiky monster with sharp claws and a protective shell.",
          "abilities": {
            "science": ["Biochemistry", "Defense mechanisms"],
            "magic": ["Earth manipulation", "Barrier spells"]
          },
          "origin": "Thornridge",
          "num_horns": 2,
          "num_eyes": 3,
          "num_arms": 4,
          "num_tails": 1
        },
        {
          "id": uuid(),
          "first_name": "Bubbles",
          "last_name": "Glowfin",
          "description": "A bubbly monster with luminescent scales and a bubbly personality.",
          "abilities": {
            "science": ["Marine biology", "Chemical reactions"],
            "magic": ["Bubble manipulation", "Aquatic spells"]
          },
          "origin": "Bubbleopolis",
          "num_eyes": 2,
          "num_arms": 2,
          "num_tails": 1
        },
        {
          "id": uuid(),
          "first_name": "Rumble",
          "last_name": "Stonehide",
          "description": "A sturdy monster with rocky skin and seismic powers.",
          "abilities": {
            "science": ["Geology", "Structural engineering"],
            "magic": ["Earth manipulation", "Vibration spells"]
          },
          "origin": "Quakevale",
          "num_horns": 2,
          "num_eyes": 2,
          "num_arms": 2,
          "num_tails": 1
        },
        {
          "id": uuid(),
          "first_name": "Wisp",
          "last_name": "Shadowglimmer",
          "description": "A mysterious monster with wispy tendrils and shadowy abilities.",
          "abilities": {
            "science": ["Dark matter research", "Stealth technology"],
            "magic": ["Shadow manipulation", "Illusions"]
          },
          "origin": "Shadewood",
          "num_eyes": 2,
          "num_tentacles": 6
        },
      ],
      editMode: false
}





export const MonsterContext = createContext<{
  state: MonsterState
  dispatch: React.Dispatch<Action>
}>
({
  state: initialMonsterState,
  dispatch: () => null,
})