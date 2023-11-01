import { IsOptional, IsString } from "class-validator";

export class EnvDto {
	@IsOptional()
	documentPath?: string;

	@IsString()
	openApiKey: string;
}