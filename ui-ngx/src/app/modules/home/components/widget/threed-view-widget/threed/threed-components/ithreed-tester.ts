///
/// Copyright © 2016-2023 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { IThreedListener } from "./ithreed-listener";
import { IThreedMesh } from "./ithreed-mesh";
import { IThreedObjectSelector } from "./ithreed-object-selector";
import { IThreedOrbitController } from "./ithreed-orbit-controller";
import { IThreedPerson } from "./ithreed-person";
import { IThreedPhysic } from "./ithreed-physic";
import { IThreedProgress } from "./ithreed-progress";
import { IThreedUpdatable } from "./ithreed-updatable";

export class IThreedTester {

    public static isIThreedProgress = function (obj: any): obj is IThreedProgress {
        return 'updateProgress' in obj && typeof obj['updateProgress'] === 'function';
    }

    public static isIThreedUpdatable = function (obj: any): obj is IThreedUpdatable {
        return 'onUpdateValues' in obj && typeof obj['onUpdateValues'] === 'function';
    }

    public static isIThreedListener = function (obj: any): obj is IThreedListener {
        return 'onKeyDown' in obj && typeof obj['onKeyDown'] === 'function'
            && 'onKeyUp' in obj && typeof obj['onKeyUp'] === 'function'
            && 'onMouseMove' in obj && typeof obj['onMouseMove'] === 'function'
            && 'onMouseClick' in obj && typeof obj['onMouseClick'] === 'function';
    }

    public static isIThreedOrbitController = function (obj: any): obj is IThreedOrbitController {
        return 'getOrbitController' in obj && typeof obj['getOrbitController'] === 'function';
    }

    public static isIThreedObjectSelector = function (obj: any): obj is IThreedObjectSelector {
        return 'getSelectedObject' in obj && typeof obj['getSelectedObject'] === 'function'
            && 'deselectObject' in obj && typeof obj['deselectObject'] === 'function';
    }

    public static isIThreedMesh = function (obj: any): obj is IThreedMesh {
        return 'getMesh' in obj && typeof obj['getMesh'] === 'function';
    }

    public static isIThreedPhysic = function (obj: any): obj is IThreedPhysic {
        return 'updatePhysics' in obj && typeof obj['updatePhysics'] === 'function'
            && 'updateVisuals' in obj && typeof obj['updateVisuals'] === 'function';
    }

    public static isIThreedPerson = function (obj: any): obj is IThreedPerson {
        return 'reset' in obj && typeof obj['reset'] === 'function'
            && 'setDebugMode' in obj && typeof obj['setDebugMode'] === 'function';
    }
}