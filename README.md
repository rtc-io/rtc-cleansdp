# rtc-sdpclean

Remove invalid lines from your SDP.


[![NPM](https://nodei.co/npm/rtc-sdpclean.png)](https://nodei.co/npm/rtc-sdpclean/)

[![Build Status](https://img.shields.io/travis/rtc-io/rtc-sdpclean.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-sdpclean) [![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/dominictarr/stability#experimental) [![Dependency Status](https://david-dm.org/rtc-io/rtc-sdpclean.svg)](https://david-dm.org/rtc-io/rtc-sdpclean) 

## Why?

This module removes the occasional "bad egg" that will slip into SDP when it
is generated by the browser.  In particular these situations are catered for:

- invalid ICE candidates

## License(s)

### Apache 2.0

Copyright 2014 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
