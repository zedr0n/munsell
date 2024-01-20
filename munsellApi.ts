import type { App, RGB } from "obsidian";
import * as munsell from 'munsell';
import { RGBSpace } from "munsell/dist/src/colorspace";

export class MunsellApi {
	public static GetApi(
		app: App) {
            return {
                hexToMhvc: (
                    hex : string,
                    rgbSpace : RGBSpace = munsell.SRGB,
                    threshold : number = 1e-6,
                    maxIteration : number = 200,
                    factor : number = 5
                ) => {
                    return munsell.hexToMhvc(hex, rgbSpace, threshold, maxIteration, undefined, factor);
                },
                mhvcToHex: (
                    h : number,
                    v : number,
                    c : number,
                    rgbSpace : RGBSpace = munsell.SRGB,
                ) => {
                    return munsell.mhvcToHex(h, v, c, rgbSpace)
                },
                rgbToMhvc: (
                    r : number,
                    g : number,
                    b : number,
                    rgbSpace : RGBSpace = munsell.SRGB,
                    threshold : number = 1e-6,
                    maxIteration : number = 200,
                    factor : number = 5
                ) => {
                    return munsell.rgbToMhvc(r, g, b, rgbSpace, threshold, maxIteration, undefined, factor)
                },
                mhvcToRgb: (
                    h : number,
                    v : number,
                    c : number,
                    rgbSpace : RGBSpace = munsell.SRGB,
                ) => {
                    return munsell.mhvcToRgb(h, v, c, rgbSpace)
                }
            }
    }
}