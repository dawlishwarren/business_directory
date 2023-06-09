export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			address: {
				Row: {
					business_id: string;
					id: number;
					line_1: string;
					line_2: string;
					line_3: string;
					line_4: string;
					postcode: string;
					town: string;
				};
				Insert: {
					business_id?: string;
					id?: number;
					line_1?: string;
					line_2?: string;
					line_3?: string;
					line_4?: string;
					postcode?: string;
					town?: string;
				};
				Update: {
					business_id?: string;
					id?: number;
					line_1?: string;
					line_2?: string;
					line_3?: string;
					line_4?: string;
					postcode?: string;
					town?: string;
				};
				Relationships: [
					{
						foreignKeyName: "address_business_id_fkey";
						columns: ["business_id"];
						referencedRelation: "business";
						referencedColumns: ["business_id"];
					}
				];
			};
			business: {
				Row: {
					business_id: string;
					category: Database["public"]["Enums"]["business_category"];
					description: string;
					name: string;
				};
				Insert: {
					business_id?: string;
					category?: Database["public"]["Enums"]["business_category"];
					description?: string;
					name?: string;
				};
				Update: {
					business_id?: string;
					category?: Database["public"]["Enums"]["business_category"];
					description?: string;
					name?: string;
				};
				Relationships: [];
			};
			contact: {
				Row: {
					address_id: number;
					business_id: string | null;
					email: string;
					id: number;
					phone: string;
					website: string;
				};
				Insert: {
					address_id: number;
					business_id?: string | null;
					email?: string;
					id?: number;
					phone?: string;
					website?: string;
				};
				Update: {
					address_id?: number;
					business_id?: string | null;
					email?: string;
					id?: number;
					phone?: string;
					website?: string;
				};
				Relationships: [
					{
						foreignKeyName: "contact_address_id_fkey";
						columns: ["address_id"];
						referencedRelation: "address";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "contact_business_id_fkey";
						columns: ["business_id"];
						referencedRelation: "business";
						referencedColumns: ["business_id"];
					}
				];
			};
			logo: {
				Row: {
					business_id: string | null;
					id: number;
					logo_url: string | null;
				};
				Insert: {
					business_id?: string | null;
					id?: number;
					logo_url?: string | null;
				};
				Update: {
					business_id?: string | null;
					id?: number;
					logo_url?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "logo_business_id_fkey";
						columns: ["business_id"];
						referencedRelation: "business";
						referencedColumns: ["business_id"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			business_category: "restaurant" | "shop" | "service" | "other";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	storage: {
		Tables: {
			buckets: {
				Row: {
					allowed_mime_types: string[] | null;
					avif_autodetection: boolean | null;
					created_at: string | null;
					file_size_limit: number | null;
					id: string;
					name: string;
					owner: string | null;
					public: boolean | null;
					updated_at: string | null;
				};
				Insert: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id: string;
					name: string;
					owner?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Update: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id?: string;
					name?: string;
					owner?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "buckets_owner_fkey";
						columns: ["owner"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			migrations: {
				Row: {
					executed_at: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Insert: {
					executed_at?: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Update: {
					executed_at?: string | null;
					hash?: string;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			objects: {
				Row: {
					bucket_id: string | null;
					created_at: string | null;
					id: string;
					last_accessed_at: string | null;
					metadata: Json | null;
					name: string | null;
					owner: string | null;
					path_tokens: string[] | null;
					updated_at: string | null;
					version: string | null;
				};
				Insert: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Update: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "objects_bucketId_fkey";
						columns: ["bucket_id"];
						referencedRelation: "buckets";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "objects_owner_fkey";
						columns: ["owner"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			can_insert_object: {
				Args: {
					bucketid: string;
					name: string;
					owner: string;
					metadata: Json;
				};
				Returns: undefined;
			};
			extension: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			filename: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			foldername: {
				Args: {
					name: string;
				};
				Returns: unknown;
			};
			get_size_by_bucket: {
				Args: Record<PropertyKey, never>;
				Returns: {
					size: number;
					bucket_id: string;
				}[];
			};
			search: {
				Args: {
					prefix: string;
					bucketname: string;
					limits?: number;
					levels?: number;
					offsets?: number;
					search?: string;
					sortcolumn?: string;
					sortorder?: string;
				};
				Returns: {
					name: string;
					id: string;
					updated_at: string;
					created_at: string;
					last_accessed_at: string;
					metadata: Json;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
