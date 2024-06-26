# Roundness Calculation Script For Illustrator
This script allows us to calculate Roundness value using circular paths on the Illustrator.

## Definition
The roundness is one of the useful parameters for grain shapes. The definition is extremely simple as below.

$$Roundness = \left({1 \over n} \sum_{k=1}^n r_k \right)/R_{max}$$

where $R_{max}$ is the radious of maximum inscribed circle, $n$ is number of corners in the circumference and $r_i$ is the radious of $i$ th corner concaveture.

![roundness model](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/0a3172fc-6112-4394-b69b-33ba2825e3aa)

red: maximum inscribed circle

orange: corner concaveture

green: small circles that fits in the corner concaveture

## Install

### Basic
Put the "RoundnessForAI.js" on the below folder.
- Windows(case of Japanese version) 
  - C:\Program Files\Adobe\Adobe Illustrator 2023\Presets\ja_JP\script

After restart Illustrator, you can use the script from Files>>Scripts>>RoundnessForAI. 


  
- Mac(case of Japanese version; unconfirmed)
  - Adobe Illustrator[version]/Presets/ja_JP/script

### Advanced

You can use this script more simply by registering this as an action.
1. Create a new action from the footer icon of the action panel.
2. After stopping the action recoding, chose a insert menu item from the upper right config icon of the action panel.
3. Search for a item "RoundnessForAI" using keywords "roundness".
4. This script will be resistered in the action.
  
## Usage
1. Draw a maximum inscribed circle and small circles that fits the corners of the particle outline.
2. Select the circular paths to be used in the roundness calculation.
3. Run this script from "Files>>Scripts>>RoundnessForAI" or resistered action.
4. The calculated roundness value is displayed in the pop-up window and drawn as the text form on the canvas.

![result drawn](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/a6256293-ed54-4622-bf03-f313234849c4)
![pop-up](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/4f99a987-72af-41d2-95d0-4a9e4264f5ec)


## Test environment
- Windows11
- Adobe Illustrator 27.9(64bit)

## Reference
- [Illustrator Scripting Guide](https://ai-scripting.docsforadobe.dev/index.html)
