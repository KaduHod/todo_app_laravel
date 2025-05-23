<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PutTask extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "id" => "required|integer|exists:tasks",
            "title" => "required|min:3|max:255",
            "description" => "required|min:3|max:255",
            "completed" => "boolean",
            "due_date" => "required|date",
        ];
    }
}
