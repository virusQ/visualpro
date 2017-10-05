# visualpro
An app use to display dynamic lyrics with graphical/video background which can use for countdown and viewing videos, build in electron.io and AngularJS.

Approach
# Countdown
Receive input time, and start counting down at the rendere.
Open rendere if it is not opened.

#Song
Maintain song using Angular and store it in application internally with electron for easier browsing.
1. Artist - name, id, 
2. Album - name, id
3. Song - name, artist_id, album_id, id, lyric, isArchived
4. Lyric - en, cn, st

#Config
Maintain the display style
## Attributes
1. Font-size
2. Font-weight (bold)
3. Font-style (italic, underline)
4. Color
5. Font
6. Text-align 
7. Verticle-align
** All has a pair of value

#Project
Maintain, import songs, configuration
Save Externally

#Console
Control the renderer

#User Experience
Optimization
Documentation/Tutorial
Loading cover

#Import/Export
Internal file
