interface GlobState<DataType, ErrorMessage> {
   isLoading: boolean
   isSuccess?: boolean
   isError: boolean
   isErrorMessage: ErrorMessage
   data?: DataType
   filteredData?: any
}
