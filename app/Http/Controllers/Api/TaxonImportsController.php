<?php

namespace App\Http\Controllers\Api;

use App\Importing\TaxonImport;

class TaxonImportsController extends BaseImportController
{
    protected function type()
    {
        return TaxonImport::class;
    }
}
