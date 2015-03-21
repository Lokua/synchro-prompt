## [1.1.0] 2015.03.20

#### Breaking Changes

+ the default options are no longer {color,format,validate}
  now using just color, and a single transform param
  which passes input to a callback function 
  (default indentity)
  
+ In addition to the normal (message|array<message>, options)
  signature, the function can also be initialized/configured
  with single hash which will permanently override the defaults.

