// fetchData.ts

/**
 * Utility functions to handle HTTP requests using the Fetch API.
 */

// Type for request options
type RequestOptions = {
    headers?: HeadersInit;
    body?: unknown;
  };
  
  /**
   * GET request
   * @param url - The URL to send the GET request to
   * @param options - Additional request options (headers, etc.)
   * @returns A promise resolving to the response data
   */
  export async function getDataApi<T>(url: string, options?: RequestOptions): Promise<T> {
    const response = await fetch(url, {
      method: 'GET',
      headers: options?.headers,
    });
  
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }
  
    return response.json();
  }
  
  /**
   * POST request
   * @param url - The URL to send the POST request to
   * @param body - The data to be sent in the body of the request
   * @param options - Additional request options (headers, etc.)
   * @returns A promise resolving to the response data
   */
  export async function postDataApi<T>(
    url: string,
    body: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }
  
    return response.json();
  }
  
  /**
   * PATCH request
   * @param url - The URL to send the PATCH request to
   * @param body - The data to be sent in the body of the request
   * @param options - Additional request options (headers, etc.)
   * @returns A promise resolving to the response data
   */
  export async function patchDataApi<T>(
    url: string,
    body: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      throw new Error(`PATCH request failed: ${response.statusText}`);
    }
  
    return response.json();
  }
  
  /**
   * DELETE request
   * @param url - The URL to send the DELETE request to
   * @param options - Additional request options (headers, etc.)
   * @returns A promise resolving to the response status or data
   */
  export async function deleteDataApi<T>(url: string, options?: RequestOptions): Promise<T> {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: options?.headers,
    });
  
    if (!response.ok) {
      throw new Error(`DELETE request failed: ${response.statusText}`);
    }
  
    return response.json();
  }
  