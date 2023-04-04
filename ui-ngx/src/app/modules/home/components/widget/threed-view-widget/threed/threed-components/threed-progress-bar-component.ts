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

import { ElementRef } from '@angular/core';
import { IThreedSceneManager } from "../threed-managers/ithreed-scene-manager";
import { ThreedBaseComponent } from "./threed-base-component";
import { IThreedProgress } from './ithreed-progress';


export class ThreedProgressBarComponent extends ThreedBaseComponent implements IThreedProgress {

    private static lastId: number = 0;

    private html: string;
    private containerId: string;
    private progressBarId: string;
    private progressBarContainer?: HTMLElement;
    private progressBarElement?: HTMLElement;

    initialize(sceneManager: IThreedSceneManager): void {
        super.initialize(sceneManager);

        this.generateHtmlAndId();
        this.sceneManager.onRendererContainerChange.subscribe(container => {
            this.attachHtmlToContainer(container);
        });
    }

    private generateHtmlAndId(): void {
        this.containerId = `Container_ThreedProgressBarComponentId_${ThreedProgressBarComponent.lastId}`;
        this.progressBarId = `Element_ThreedProgressBarComponentId_${ThreedProgressBarComponent.lastId++}`;
        this.html = `
        <div id="${this.containerId}" 
            style="position: absolute; top:0px!important; width: 100%; height: 4px; background-color: #f5f5f5; border-radius: 2px;">
            <div id="${this.progressBarId}"
                style="position: absolute; top: 0; left: 0; height: 100%; background-color: #007bff; border-radius: 2px; transition: width 0.3s ease-in-out;" 
                role="progressbar" 
                aria-valuenow="0" 
                aria-valuemin="0" 
                aria-valuemax="100">
            </div>
        </div>
        `;
    }

    private attachHtmlToContainer(container: ElementRef) {
        if (this.progressBarContainer) this.progressBarContainer.remove();
        container.nativeElement.insertAdjacentHTML('afterbegin', this.html);
        this.progressBarContainer = document.getElementById(this.containerId);
        this.progressBarElement = document.getElementById(this.progressBarId);
        this.hide();
    }

    public updateProgress(progress: number) {
        progress *= 100;
        if (progress >= 100) this.hide();
        else this.show();

        console.log("updateProgress " +progress, this.progressBarElement == undefined);

        if (this.progressBarElement) {
            this.progressBarElement.style.width = `${progress}%`;
            this.progressBarElement.setAttribute('aria-valuenow', progress.toString());
        }
    }

    private hide() {
        if (this.progressBarContainer) {
            this.progressBarContainer.style.display = 'none';
        }
    }

    private show() {
        if (this.progressBarContainer) {
            this.progressBarContainer.style.display = 'block';
        }
    }
}