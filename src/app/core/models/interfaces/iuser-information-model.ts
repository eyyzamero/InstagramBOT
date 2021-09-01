export interface IUserInformationModel {
	id: number;
	username: string;
	fullName: string;
	profilePictureID: string;
	profilePictureURL: string;
	isPrivate: boolean;
	isVerified: boolean;
	isBusinessAccount: boolean;
}
