import { ITermStore, ITerm  } from './ISPTermStorePickerService';
import {IPickerTerms, IPickerTerm } from './../propertyFields/termPicker/IPropertyFieldTermPicker';
/**
 * Defines a http client to request mock data to use the web part with the local workbench
 */
export default class SPTermStoreMockHttpClient {

  /**
   * Mock SharePoint result sample
   */
  private static _mockTermStores: ITermStore[] = [{
    "_ObjectType_": "SP.Taxonomy.TermStore",
    "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:st:generated-idwdg==",
    "Id": "\/Guid(fd32e8c4-99f8-402a-8444-4efed3df3076)\/",
    "Name": "Mock TermStore",
    "Groups": {
      "_ObjectType_": "SP.Taxonomy.TermGroupCollection",
      "_Child_Items_": [{
        "_ObjectType_": "SP.Taxonomy.TermGroup",
        "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:gr:generated-id-wdsWeHAWewaRChzC1Im8LcS8=",
        "Name": "Mock TermGroup 1",
        "Id": "\/Guid(051c9ec5-c19e-42a4-8730-b5226f0b712f)\/",
        "IsSystemGroup": false,
        "TermSets": {
          "_ObjectType_": "SP.Taxonomy.TermSetCollection",
          "_Child_Items_": [{
            "_ObjectType_": "SP.Taxonomy.TermSet",
            "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:se:generated-id-wdsWeHAWewaRChzC1Im8LcS\u002fwbRtbognrQqP2AGVWYhkx",
            "Name": "Mock TermSet 1",
            "Id": "\/Guid(5b1b6df0-09a2-42eb-a3f6-006556621931)\/",
            "Description": "",
            "Names": {
              "1033": "Mock TermSet 1"
            }
          }]
        }
      }]
    }
  }];

  private static _mockTerms: ITerm[] = [{
    "_ObjectType_": "SP.Taxonomy.Term",
    "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:te:generated-id-SPnCDng5nkmdP+UcRJTUTA==",
    "Name": "Belgium",
    "Id": "0ec2f948-3978-499e-9d3f-e51c4494d44c",
    "Description": "",
    "IsDeprecated": false,
    "IsRoot": true,
    "PathOfTerm": "Belgium",
    "PathDepth": 1,
    "TermSet": {
      "_ObjectType_": "SP.Taxonomy.TermSet",
      "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:se:generated-id-",
      "Id": "\/Guid(5b1b6df0-09a2-42eb-a3f6-006556621931)\/",
      "Name" : "Country"
    }
  }, {
    "_ObjectType_": "SP.Taxonomy.Term",
    "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:te:generated-id-1a3nKkDuZUOvMhLp9PvKFw==",
    "Id": "2ae7add5-ee40-4365-af32-12e9f4fbca17",
    "Name": "Antwerp",
    "Description": "",
    "IsDeprecated": false,
    "IsRoot": false,
    "PathOfTerm": "Belgium;Antwerp",
    "PathDepth": 2,
    "TermSet": {
      "_ObjectType_": "SP.Taxonomy.TermSet",
      "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:se:generated-id-",
      "Id": "\/Guid(5b1b6df0-09a2-42eb-a3f6-006556621931)\/",
      "Name" : "Country"
    }
  }, {
    "_ObjectType_": "SP.Taxonomy.Term",
    "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:te:generated-id-WCbUI7Ims0ysT\u002fBkk4NUhQ==",
    "Name": "Brussels",
    "Id": "23d42658-26b2-4cb3-ac4f-f06493835485",
    "Description": "",
    "IsDeprecated": false,
    "IsRoot": false,
    "PathOfTerm": "Belgium;Brussels",
    "PathDepth": 2,
    "TermSet": {
      "_ObjectType_": "SP.Taxonomy.TermSet",
      "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:se:generated-id-",
      "Id": "\/Guid(5b1b6df0-09a2-42eb-a3f6-006556621931)\/",
      "Name" : "Country"
    }
  }, {
    "_ObjectType_": "SP.Taxonomy.Term",
    "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:te:generated-id-WCbUI7Ims0ysT\u002fBkk4NUhQ==",
    "Name": "Deprecated",
    "Id": "23d42658-26b2-4cb3-ac4f-f06493835486",
    "Description": "",
    "IsDeprecated": true,
    "IsRoot": true,
    "PathOfTerm": "Deprecated",
    "PathDepth": 1,
    "TermSet": {
      "_ObjectType_": "SP.Taxonomy.TermSet",
      "_ObjectIdentity_": "5e06ddd0-d2dd-4fff-bcc0-42b40f4aa59e|4dbeb936-1813-4630-a4bd-9811df3fe7f1:se:generated-id-",
      "Id": "\/Guid(5b1b6df0-09a2-42eb-a3f6-006556621931)\/",
      "Name" : "Country"
    }
  }];

  /**
   * Mock method which returns mock terms stores
   */
  public static getTermStores(restUrl: string, options?: any): Promise<ITermStore[]> {
    return new Promise<ITermStore[]>((resolve) => {
      resolve(SPTermStoreMockHttpClient._mockTermStores);
    });
  }

  /**
   * Mock method wich returns mock terms
   */
  public static getAllTerms(): Promise<ITerm[]> {
    return new Promise<ITerm[]>((resolve) => {
      resolve(SPTermStoreMockHttpClient._mockTerms);
    });
  }


  public static searchTermsByName(searchText: string): Promise<IPickerTerm[]> {
    return new Promise<IPickerTerm[]>((resolve) => {
      resolve([
        {
          key : "123", 
          name : 'term1',
          path : "path;path2",
          termSet :"123",
          termSetName : "tsName"
         },
         {
          key : "124", 
          name : 'term2',
          path : "path",
          termSet :"123",
          termSetName : "tsName"
         },
         {
          key : "125", 
          name : 'term3',
          path : "path;path2;path3",
          termSet :"123",
          termSetName : "tsName"
         }
        ]);
    });
  } 

}
