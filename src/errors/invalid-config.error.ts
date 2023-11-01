export class InvalidConfigError extends Error {
	code: string;
	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;
		this.code = 'INVALID_CONFIG';

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}