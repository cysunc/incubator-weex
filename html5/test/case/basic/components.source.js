/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function otherNameFunction () {
  var module = {}
  var exports = {}
  module.exports = exports

  ;module.exports.style = {}

  ;module.exports.template = {
    "type": "container",
    "children": [
      {
        "type": "text",
        "attr": {
          "value": function () {return this.outerData.a}
        }
      },
      {
        "type": "text",
        "attr": {
          "value": function () {return this.outerData.b}
        }
      }
    ]
  }

  ;module.exports.created = function() {
    this.outerData.a = 'aa'
  }

  ;module.exports.ready = function() {
    this.outerData.b = 'bb'
  }

  return module.exports
}

// module

define('@weex-component/subvm', function (require, exports, module) {

;
  module.exports = {
    "components": {
      innertpl: otherNameFunction()
    },
    data: function () {return {
      item: {a: 'a', b: 'b'},
      className: 'fromOuter',
      marginTop: 10
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "container",
  "children": [
    {
      "type": "innertpl",
      "classList": function() {
        return this.className
      },
      "style": {
        marginTop: function() {
          return this.marginTop
        }
      },
      "events": {
          "click": "clicked"
      },
      "attr": {
        "outerData": function () {return this.item}
      }
    }
  ]
}

;})

// require module

bootstrap('@weex-component/subvm')
