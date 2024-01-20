import type { App } from "obsidian";
import * as munsell from 'munsell';

export class MunsellApi {
	public static GetApi(
		app: App) {
            return {
                hexToMhvc: (
                    hex : string                    
                ) => {
                    return munsell.hexToMhvc(hex);
                },
            }
    }
}