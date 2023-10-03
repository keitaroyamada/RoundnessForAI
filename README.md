# Roundness Calculation Script For Illustrator
This script allows us to calculate Roundness value using circular paths in the Illustrator.

## Definition
The roundness is one of the useful shape parameters for grain shapes. The definition is extremely simple as below.

$$Roundness = \left({1 \over n} \sum_{k=1}^n r_k \right)/R_{max}$$

where $R_{max}$ is the radious of maximum inscribed circle, $n$ is number of corners in the circumference and $r_i$ is the radious of $i$ th corner concaveture.

![roundness model](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/159512c7-a32e-43ee-9724-9e3fbddef613)


## install

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
  
## usage
1. Draw a maximum inscribed circle and small circles that fits the corners of the particle outline.
2. Select the circular paths to be used in the roundness calculation.
3. Run this script from "Files>>Scripts>>RoundnessForAI" or resistered action.
4. The calculated roundness value is displayed in the pop-up window and drawn as the text form on the canvas.

![result drawn](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/5a509675-5c42-4f52-b094-9b25f4cad566)
![pop-up](https://github.com/keitaroyamada/RoundnessForAI/assets/146403785/4510ae3d-bb77-4663-a9dc-57d83cdab0e0)

## Test environment
- Windows11
- Adobe Illustrator 27.9(64bit)

## Reference
- [Illustrator Scripting Guide](https://ai-scripting.docsforadobe.dev/index.html)
