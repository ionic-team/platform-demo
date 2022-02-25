/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
  onCreateExpense: OnCreateExpenseSubscription;
  onUpdateExpense: OnUpdateExpenseSubscription;
  onDeleteExpense: OnDeleteExpenseSubscription;
  onCreateProduct: OnCreateProductSubscription;
  onUpdateProduct: OnUpdateProductSubscription;
  onDeleteProduct: OnDeleteProductSubscription;
};

export type CreateEmployeeInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
};

export type ModelEmployeeConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  office?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  contactCell?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  title?: ModelStringInput | null;
  department?: ModelStringInput | null;
  imagesLarge?: ModelStringInput | null;
  imagesMedium?: ModelStringInput | null;
  imagesThumbnail?: ModelStringInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  office?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactCell?: string | null;
  birthDate?: string | null;
  title?: string | null;
  department?: string | null;
  imagesLarge?: string | null;
  imagesMedium?: string | null;
  imagesThumbnail?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type CreateExpenseInput = {
  id?: string | null;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
};

export type ModelExpenseConditionInput = {
  category?: ModelStringInput | null;
  merchant?: ModelStringInput | null;
  note?: ModelStringInput | null;
  cost?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelExpenseConditionInput | null> | null;
  or?: Array<ModelExpenseConditionInput | null> | null;
  not?: ModelExpenseConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Expense = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateExpenseInput = {
  id: string;
  category?: string | null;
  merchant?: string | null;
  note?: string | null;
  cost?: number | null;
  date?: string | null;
};

export type DeleteExpenseInput = {
  id: string;
};

export type CreateProductInput = {
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id?: string | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  price?: ModelIntInput | null;
  image?: ModelStringInput | null;
  saleCategory?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type Product = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductInput = {
  name?: string | null;
  price?: number | null;
  image?: string | null;
  saleCategory?: string | null;
  quantity?: number | null;
  id: string;
};

export type DeleteProductInput = {
  id: string;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  office?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  contactPhone?: ModelStringInput | null;
  contactCell?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  title?: ModelStringInput | null;
  department?: ModelStringInput | null;
  imagesLarge?: ModelStringInput | null;
  imagesMedium?: ModelStringInput | null;
  imagesThumbnail?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type ModelExpenseFilterInput = {
  id?: ModelIDInput | null;
  category?: ModelStringInput | null;
  merchant?: ModelStringInput | null;
  note?: ModelStringInput | null;
  cost?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelExpenseFilterInput | null> | null;
  or?: Array<ModelExpenseFilterInput | null> | null;
  not?: ModelExpenseFilterInput | null;
};

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection";
  items: Array<Expense | null>;
  nextToken?: string | null;
};

export type ModelProductFilterInput = {
  name?: ModelStringInput | null;
  price?: ModelIntInput | null;
  image?: ModelStringInput | null;
  saleCategory?: ModelStringInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateExpenseMutation = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateExpenseMutation = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteExpenseMutation = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateProductMutation = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductMutation = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductMutation = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    firstName: string;
    lastName: string;
    office: string;
    contactEmail: string;
    contactPhone: string;
    contactCell: string;
    birthDate: string;
    title: string;
    department: string;
    imagesLarge: string;
    imagesMedium: string;
    imagesThumbnail: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetExpenseQuery = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type ListExpensesQuery = {
  __typename: "ModelExpenseConnection";
  items: Array<{
    __typename: "Expense";
    id: string;
    category: string;
    merchant: string;
    note: string;
    cost: number;
    date: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetProductQuery = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    name: string;
    price: number;
    image: string;
    saleCategory: string;
    quantity?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName: string;
  lastName: string;
  office: string;
  contactEmail: string;
  contactPhone: string;
  contactCell: string;
  birthDate: string;
  title: string;
  department: string;
  imagesLarge: string;
  imagesMedium: string;
  imagesThumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateExpenseSubscription = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateExpenseSubscription = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteExpenseSubscription = {
  __typename: "Expense";
  id: string;
  category: string;
  merchant: string;
  note: string;
  cost: number;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  name: string;
  price: number;
  image: string;
  saleCategory: string;
  quantity?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async CreateExpense(
    input: CreateExpenseInput,
    condition?: ModelExpenseConditionInput
  ): Promise<CreateExpenseMutation> {
    const statement = `mutation CreateExpense($input: CreateExpenseInput!, $condition: ModelExpenseConditionInput) {
        createExpense(input: $input, condition: $condition) {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateExpenseMutation>response.data.createExpense;
  }
  async UpdateExpense(
    input: UpdateExpenseInput,
    condition?: ModelExpenseConditionInput
  ): Promise<UpdateExpenseMutation> {
    const statement = `mutation UpdateExpense($input: UpdateExpenseInput!, $condition: ModelExpenseConditionInput) {
        updateExpense(input: $input, condition: $condition) {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateExpenseMutation>response.data.updateExpense;
  }
  async DeleteExpense(
    input: DeleteExpenseInput,
    condition?: ModelExpenseConditionInput
  ): Promise<DeleteExpenseMutation> {
    const statement = `mutation DeleteExpense($input: DeleteExpenseInput!, $condition: ModelExpenseConditionInput) {
        deleteExpense(input: $input, condition: $condition) {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteExpenseMutation>response.data.deleteExpense;
  }
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            office
            contactEmail
            contactPhone
            contactCell
            birthDate
            title
            department
            imagesLarge
            imagesMedium
            imagesThumbnail
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  async GetExpense(id: string): Promise<GetExpenseQuery> {
    const statement = `query GetExpense($id: ID!) {
        getExpense(id: $id) {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetExpenseQuery>response.data.getExpense;
  }
  async ListExpenses(
    filter?: ModelExpenseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListExpensesQuery> {
    const statement = `query ListExpenses($filter: ModelExpenseFilterInput, $limit: Int, $nextToken: String) {
        listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            category
            merchant
            note
            cost
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListExpensesQuery>response.data.listExpenses;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            price
            image
            saleCategory
            quantity
            id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  OnCreateEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEmployee {
        onCreateEmployee {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  >;

  OnUpdateEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEmployee {
        onUpdateEmployee {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  >;

  OnDeleteEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEmployee {
        onDeleteEmployee {
          __typename
          id
          firstName
          lastName
          office
          contactEmail
          contactPhone
          contactCell
          birthDate
          title
          department
          imagesLarge
          imagesMedium
          imagesThumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  >;

  OnCreateExpenseListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateExpense">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateExpense {
        onCreateExpense {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateExpense">>
  >;

  OnUpdateExpenseListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateExpense">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateExpense {
        onUpdateExpense {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateExpense">>
  >;

  OnDeleteExpenseListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteExpense">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteExpense {
        onDeleteExpense {
          __typename
          id
          category
          merchant
          note
          cost
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteExpense">>
  >;

  OnCreateProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  >;

  OnUpdateProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  >;

  OnDeleteProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          name
          price
          image
          saleCategory
          quantity
          id
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  >;
}
