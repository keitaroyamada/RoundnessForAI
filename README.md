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
